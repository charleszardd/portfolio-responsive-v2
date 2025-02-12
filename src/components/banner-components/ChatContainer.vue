<template>
  <v-row class="chat-section">
    <v-col>
      <v-card
        class="chat-container card-radius border-sm bg-grey-lighten-3"
        elevation="10"
      >
        <div class="header justify-space-between">
          <span class="text-h6 d-flex text-grey-lighten-1">
            <v-icon class="mr-2">mdi-robot-outline</v-icon> Kasenyashi
          </span>
          <Button
            flat
            class="close-btn text-h6 text-grey-lighten-1"
            :addMargin="false"
            @click="$emit('close-chat')"
            icon="mdi-close"
          />
        </div>
        <div
          class="messages-container"
          :class="{ 'welcome-active': chatHistory.length < 1 }"
        >
          <div class="messages-content">

            <div v-if="chatHistory.length < 1" class="welcome-message">
              <div class="d-flex custom-font flex-column align-center">
                <v-icon class="text-grey-lighten-1 text-h1"
                  >mdi-robot-outline</v-icon
                >
                <span class="mt-3 text-grey-lighten-1 text-h5 font-weight-bold"
                  >Ask Kasenyashi about me</span
                >
                <p class="px-5 mt-5 text-center text-grey-lighten-1">
                  Kasenyashi is powered by the Gemini AI API. While it can
                  provide insights about me, some details may be limited. Feel
                  free to ask!
                </p>
                <v-row class="mt-10 px-5">
                <v-col class="" v-for="chat in chats" :key="chat">
                  <Button class="bg-transparent text-blue-lighten-1 btn-message" elevation="10" @click="handleSendSelectedMessage(chat.text)" :text="chat.text"/>
                </v-col>
              </v-row>
              </div>
            </div>

            <div v-else class="chat-messages">
              <div
                v-for="(message, index) in chatHistory"
                :key="index"
                class="message-wrapper"
                :class="
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                "
              >
                <div v-if="message.role === 'model'" class="model-avatar">
                  <v-icon class="text-h5 text-blue-lighten-1"
                    >mdi-robot-outline</v-icon
                  >
                </div>
                <div
                  class="message"
                  :class="
                    message.role === 'user' ? 'user-message' : 'bot-message'
                  "
                >
                  <p class=" message-text" v-html="parseMarkdown(message.text)"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="isLoading" class="loading-indicator">
          <LottieAnimationFiles
            :animationData="animationData"
            width="50px"
            height="50px"
          />
        </div>

        <div class="input-container">
          <div class="input-wrapper d-flex px-4 pb-2" align="center">
            <v-text-field
              class="text-field"
              v-model="userMessage"
              variant="outlined"
              hide-details
              label="Ask anything about Charles..."
              density="comfortable"
              :disabled="isLoading"
              @keyup.enter="sendMessage"
            ></v-text-field>
            <v-btn
              elevation="10"
              @click="sendMessage"
              height="47"
              width="30"
              class="send-btn ml-2"
            >
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
  
  <script setup>
import { sendMessageToAI } from "../../services/GenerativeAiService";
import LottieAnimationFiles from "@/components/reusables/LottieAnimationFiles.vue";
import LoadTyping from "@/lottie-animation/LoadTyping.json";
import { ref } from "vue";
import { marked } from 'marked';

const animationData = ref(LoadTyping);
const userMessage = ref("");
const chatHistory = ref([]);
const isLoading = ref(false);

const sendMessage = async () => {
  if (!userMessage.value.trim() || isLoading.value) return;

  const message = userMessage.value.trim();
  isLoading.value = true;

  try {
    chatHistory.value.push({ role: "user", text: message });
    userMessage.value = "";

    const response = await sendMessageToAI(message);
    chatHistory.value.push({
      role: "model",
      text: response.text,
    });
  } catch (error) {
    console.error("Error in chat:", error);
    chatHistory.value.push({
      role: "model",
      text: "Service is currently overloaded. Please try again later.",
    });
  } finally {
    isLoading.value = false;
  }
};

  const chats = ([
    { text: 'Tell me something about Charles' },
   { text: 'Tell me about his projects' },
    { text: 'Why should we hire him?' },
   ]);

   const handleSendSelectedMessage = async (message) => {
  if (!message || isLoading.value) return;

  chatHistory.value.push({ role: "user", text: message });

  try {
     isLoading.value = true;
    const response = await sendMessageToAI(message);
     chatHistory.value.push({ role: "model", text: response.text });
   } catch (error) {
     console.error("Error in chat:", error);
     chatHistory.value.push({
       role: "model",
       text: "Service is currently overloaded. Please try again later.",
    });
   } finally {
     isLoading.value = false;
   }
};

const parseMarkdown = (text) => {
  return marked(text);
};
marked.setOptions({
  gfm: false, // Disable GitHub-Flavored Markdown
});
</script>
  
  <style scoped>
.close-btn {
  background-color: #171a21 !important;
}
.bg-btn {
  background: #3268e6;
}
.btn-message{
  border: 2px solid #66c0f4;
}
.send-btn {
  background: linear-gradient(to left, #3268e6, #66c0f4);
}
.loading-indicator {
  position: absolute;
  bottom: 30px;
  left: 30px;
  margin-bottom: 3rem;
  color: white;
  padding: 5px;
  padding-top: 0;
  padding-bottom: 0;
  border-radius: 10px;
  font-size: 0.875rem;
  z-index: 20;
}
.chat-container {
  height: 100vh;
  width: 600px;
  max-width: 1000px;
  position: fixed;
  border: 2px solid #171a21;
  right: 0;
  top: 0;
  z-index: 2000;
  background-color: #171a21 !important;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #171a21 !important;
  border-bottom: 2px solid #1b2838;
  color: white;
}

.header-text {
  padding: 10px;
  color: white;
  margin: 0;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  padding-bottom: 0;
  margin-bottom: 64px;
  position: relative;
  display: flex;
  height: calc(100vh - 140px);
  border: 1px solid #171a21;
}
.messages-container.welcome-active {
  align-items: center;
}

.messages-container:not(.welcome-active) {
  align-items: flex-start;
}

.messages-content {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.message-wrapper {
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
  align-items: flex-start;
  gap: 8px;
}

.welcome-message {
  opacity: 0.9;
  width: 100%;
  display: flex;
  justify-content: center;
}
.chat-messages {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.message {
  max-width: calc(70% - 48px);
  padding: 0.75rem;
  border-radius: 1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  margin-bottom: 0!important;
  padding-bottom: 0!important;
}

.user-message {
  background: linear-gradient(to left, #3268e6, #66c0f4);
  color: white;
  justify-content: flex-start;
}

.bot-message {
  background-color: #e5e7eb;
  color: #1f2937;
}

.message-text {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0;
  white-space: pre-wrap;
}

.input-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #171a21;
  border-top: 2px solid #1b2838;
  padding: 0.5rem 0;
  color: white;
  z-index: 10;
}

.input-wrapper {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.text-field {
  border: 2px solid #1b2838;
}
.messages-container {
  scrollbar-width: thin;
}

.messages-container::-webkit-scrollbar {
  width: 6px;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}
@media (max-width: 600px) {
  .chat-container {
    max-height: 100dvh;
    height: 100dvh;
    width: 100;
    max-width: 100%;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 1200px) {
  .chat-container {
    height: 100dvh;
  }
}

</style>