<!-- <template>

        <v-row>
            <v-col>
                <v-card
      class="chat-container mt-10 card-radius border-sm bg-grey-lighten-3"
      elevation="10"
    >
      <div class="header">
        <h4 class="header-text">Ask Kasenyashi about me</h4>
      </div>
      <div class="messages-container">
        <div class="messages-content">

          <div class="welcome-message message-wrapper justify-start">
            <div class="model-avatar">
              <img src="/bot.png" alt="AI Assistant" />
            </div>
            <div class="message bot-message">
              <p class="message-text">Hello! I'm here to tell you about the owner of this portfolio. Feel free to ask me anything about his experience, skills, or projects.</p>
            </div>
          </div>

          <div
            v-for="(message, index) in chatHistory"
            :key="index"
            class="message-wrapper"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              v-if="message.role === 'model'"
              class="model-avatar"
            >
              <img src="/bot.png" alt="AI Assistant" />
            </div>
            <div
              class="message"
              :class="message.role === 'user' ? 'user-message' : 'bot-message'"
            >
              <p class="message-text">{{ message.text }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isLoading" class="loading-indicator">
     <LottieAnimationFiles :animationData="animationData" width="50px" height="50px"/>
        </div>
      <div class="input-container">
        <div class="input-wrapper d-flex px-4 pb-2" align="center">
          <v-text-field
            v-model="userMessage"
            variant="outlined"
            label="Type your message..."
            hide-details
            density="comfortable"
            :disabled="isLoading"
            @keyup.enter="sendMessage"
          ></v-text-field>
  
          <v-btn @click="sendMessage" height="48" width="30" class="ml-2"
            ><v-icon>mdi-send</v-icon></v-btn
          >
        </div>
      
      </div>
    </v-card>
            </v-col>
        </v-row>
   

  </template>
  
  <script setup>
  import { sendMessageToAI } from "../../services/GenerativeAiService";
  import LottieAnimationFiles from "@/components/reusables/LottieAnimationFiles.vue";
  import LoadTyping from '@/lottie-animation/LoadTyping.json';
  import { ref } from "vue";
  
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
  </script>
  
  <style scoped>
  .loading-indicator{
    position: absolute;
    bottom: 30px;
    left: 30px;
    margin-bottom: 3rem;
    background-color: #212121;
    color: white;
    padding: 5px ;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 10px;
    font-size: 0.875rem;
    z-index: 20;
  }
  .chat-container {
    height: 420px;
    width: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background-color: #212121;
    flex-shrink: 0;
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
  }
  
  .messages-content {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
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
  }
  
  .model-avatar {
    width: 32px;
    height: auto;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
.model-avatar img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
  
  .message {
    max-width: calc(70% - 48px);
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  
  .user-message {
    background-color: #212121;
    color: white;
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
    background-color: #fff;
    border-top: 1px solid #e5e7eb;
    padding: 0.5rem 0;
    z-index: 10;
  }
  
  .input-wrapper {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .messages-container {
    scrollbar-width: thin;
    scrollbar-color: #cbd5e0 #f8f9fa;
  }
  
  .messages-container::-webkit-scrollbar {
    width: 6px;
  }
  
  .messages-container::-webkit-scrollbar-track {
    background: #f8f9fa;
  }
  
  .messages-container::-webkit-scrollbar-thumb {
    background-color: #cbd5e0;
    border-radius: 3px;
  }
  
  .justify-start {
    justify-content: flex-start;
  }
  
  .justify-end {
    justify-content: flex-end;
  }
  </style> -->