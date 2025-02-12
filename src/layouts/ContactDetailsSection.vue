<template id="contactSection">
  <v-container class="h-screen custom-font" fluid>
    <v-row class="px-0 px-lg-10">
      <v-col
        v-for="contactDetails in contacts"
        :key="contactDetails"
        cols="12"
        class="text-center d-flex flex-column justify-center pr-0 pr-lg-5 px-0"
      >
        <div class="px-lg-5 px-2">
          <h1 class="text-h4 font-weight-bold text-md-h3 text-lg-h3">
            {{ contactDetails.title }}
          </h1>
          <p class="mt-2 text-grey-lighten-2">{{ contactDetails.subtitle }}</p>
        </div>

        <div class="px-0 px-lg-10 mt-5 d-flex justify-center">
          <v-card elevation="10" class="contact-card py-5 px-2 px-lg-5">
            <v-card-title class="mb-5 mt-3 text-wrap">
              Questions? Ideas? Let’s Chat! 💡
            </v-card-title>
            <v-form ref="formRef">
              <v-col>

                <v-text-field
                  variant="outlined"
                  :error="(showHint || fieldTouched.name) && !form.name.trim()" 
                  :error-messages="(showHint || fieldTouched.name) && !form.name.trim() ? 'Please fill out this field' : ''"
                  class="text-field"
                  v-model="form.name"
                  label="Your name (e.g. Walter White)"
                  @input="handleInput('name')"
                ></v-text-field>

                <v-text-field
                  variant="outlined"
                  :error="(showHint && !form.email.trim()) || (fieldTouched.email && form.email.trim() && emailError)" 
                  :error-messages="(showHint || fieldTouched.email) && !form.email.trim() ? 'Please fill out this field': '' || getEmailErrorMessage "
                  class="text-field"
                  v-model="form.email"
                  label="Your email (e.g. example@gmail.com)"
                  @input="handleInput('email')"
                ></v-text-field>

                <v-textarea
                  variant="outlined"
                  :error="(showHint || fieldTouched.message) && !form.message.trim()" 
                  :error-messages="(showHint || fieldTouched.message) && !form.message.trim() ? 'Please fill out this field' : ''"
                  class="text-field"
                  v-model="form.message"
                  @keyup.enter="sendMessageToMe"
                  label="Message me something..."
                  @input="handleInput('message')"
                ></v-textarea>

                <Button
                  :loading="loading"
                  @click="handleSendMessage"
                  height="55"
                  class="w-100 bg-blue-lighten-1 mt-2"
                  text="Send"
                />
              </v-col>
            </v-form>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script setup>
import { computed, ref } from "vue";
import { sendMessageToMe } from "@/services/EmailSenderService";

const loading = ref(false);
const showHint = ref(false);
const fieldTouched = ref({
  name: false,
  email: false,
  message: false,
});

const contacts = ref([
  {
    title: "Interested Enough ?",
    subtitle: "Tickled Your Curiosity? Drop Me a Message!",
  },
]);

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isValidEmail = (email) => {
  return email.includes('@') && email.includes('.com');
};

const emailError = computed(() => {
  return form.value.email.trim() && !isValidEmail(form.value.email);
});

const getEmailErrorMessage = computed(() => {
  if ((showHint || fieldTouched.value.email) && emailError.value) {
    return 'Please enter a valid email address';
  }
 
  return '';
});

const handleInput = (field) => {
  if (form.value[field].length > 0) {
    fieldTouched.value[field] = false;
  } else {
    fieldTouched.value[field] = true;
  }
};

const handleSendMessage = async () => {
  if (
    !form.value.name.trim() ||
    !form.value.email.trim() ||
    !form.value.message.trim() ||
    !isValidEmail(form.value.email)
  ) {
    showHint.value = true;
    return;
  }

  loading.value = true;

  try {
    await sendMessageToMe(form.value);
    alert("Message sent successfully!");
    form.value = { name: "", email: "", message: "" };
    showHint.value = false;
    fieldTouched.value = {
      name: false,
      email: false,
      message: false
    };
  } catch (error) {
    console.error("Yawa error!", error);
  } finally {
    loading.value = false;
  }
};
</script>
  
  <style scoped>
.h-screen {
  display: flex;
  align-items: center;
  background: linear-gradient(to left, #171a21, #1b2838);
  height: auto;
  min-height: 100vh;
}

.contact-card {
  width: 66%;
  max-width: 1000px;
  background-color: #171a21;
  border-radius: 15px;
}

@media (max-width: 1400px) {
  .contact-card {
    width: 66%;
    max-width: 600px;
    height: auto;
  }
  .h-screen {
    padding-top: 10em;
  }
}
@media (max-width: 600px) {
  .h-screen {
    height: auto;
    min-height: auto;
    padding-bottom: 50px;
    padding-top: 75em;
  }
  .contact-card {
    width: 90%;
    height: auto;
  }
}
</style>
  