<template id="contactSection">
  <div class="py-10 ">
    <v-container class="h-screen px-5 custom-font align-center justify-center" fluid>
      <v-col class="text-center">
        <h1
          class="text-h4 elevated-text font-weight-bold text-md-h3 text-lg-h3"
        >
          {{ contactHeader.title }}
        </h1>
        <p class="mt-2 text-grey-lighten-2">{{ contactHeader.subtitle }}</p>
      </v-col>
      <v-row class="justify-center w-100">
        
        <v-col class="px-5 pr-0 pr-lg-0" cols="12" md="10" lg="8">
          <v-card elevation="10" class="contact-card py-5 px-5 text-center">
            <v-card-title class="mb-5 mt-3 text-wrap text-center">
              Questions? Ideas? Let’s Chat! 💡
            </v-card-title>
            <v-form ref="formRef">
              <v-text-field
                variant="outlined"
                class="text-field"
                :error="(showHint || fieldTouched.name) && !form.name.trim()"
                :error-messages="
                  (showHint || fieldTouched.name) && !form.name.trim()
                    ? 'Please fill out this field'
                    : ''
                "
                v-model="form.name"
                @keyup.enter="handleSendMessage"
                label="Your name (e.g. Walter White)"
                @input="handleInput('name')"
              ></v-text-field>

              <v-text-field
                variant="outlined"
                class="text-field"
                :error="
                  (showHint && !form.email.trim()) ||
                  (fieldTouched.email && form.email.trim() && emailError)
                "
                :error-messages="
                  (showHint || fieldTouched.email) && !form.email.trim()
                    ? 'Please fill out this field'
                    : '' || getEmailErrorMessage
                "
                v-model="form.email"
                @keyup.enter="handleSendMessage"
                label="Your email (e.g. example@gmail.com)"
                @input="handleInput('email')"
              ></v-text-field>

              <v-textarea
                variant="outlined"
                class="text-field"
                :error="
                  (showHint || fieldTouched.message) && !form.message.trim()
                "
                :error-messages="
                  (showHint || fieldTouched.message) && !form.message.trim()
                    ? 'Please fill out this field'
                    : ''
                "
                v-model="form.message"
                @keyup.enter="handleSendMessage"
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
            </v-form>
          </v-card>
        </v-col>

        <v-col cols="12" md="10" lg="8" class="d-flex pr-0 px-5 justify-center">
  <v-card
    elevation="10"
    class="social-links-card px-4 py-3 d-flex flex-wrap justify-center align-center flex-grow-1"
  >
    <v-row no-gutters class="w-100 justify-center">
      <v-col
        v-for="social in socials"
        :key="social.link"
        cols="auto"
        sm="2"
        class="d-flex justify-center px-2"
      >
        <v-card
          :class="social.color"
          elevation="10"
          class="social-card d-flex align-center justify-center w-100"
          @click="
                    social.url
                      ? goToSite(social.url)
                      : handlePhoneClick()
                  "
        >
          <v-icon class="text-h4">{{ social.link }}</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</v-col>

      </v-row>
    </v-container>
  </div>
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

const contactHeader = ref({
  title: "Interested Enough ?",
  subtitle: "Tickled Your Curiosity? Drop Me a Message!",
});

const form = ref({
  name: "",
  email: "",
  message: "",
});

const isValidEmail = (email) => {
  return email.includes("@") && email.includes(".com");
};

const emailError = computed(() => {
  return form.value.email.trim() && !isValidEmail(form.value.email);
});

const getEmailErrorMessage = computed(() => {
  if ((showHint || fieldTouched.value.email) && emailError.value) {
    return "Please enter a valid email address";
  }

  return "";
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
      message: false,
    };
  } catch (error) {
    console.error("Yawa error!", error);
  } finally {
    loading.value = false;
  }
};

const socials = ref([
  {
    link: "mdi-facebook",
    color: "bg-blue-darken-3",
    url: "https://www.facebook.com/profile.php?id=100009432129470",
  },
  {
    link: "mdi-instagram",
    color: "bg-insta",
    url: "https://www.instagram.com/kasenyassshi/",
  },
  {
    link: "mdi-linkedin",
    color: "bg-blue-darken-2",
    url: "https://www.linkedin.com/in/charles-david-case%C3%B1as-776aa8293/",
  },
  {
    link: "mdi-github",
    color: "bg-github",
    url: "https://github.com/charleszardd",
  },
  { link: "mdi-phone", color: "bg-green" },
]);

const goToSite = (url) => {
  window.open(url, "_blank");
};

const handlePhoneClick = () => {
  window.location.href = "sms: +639638623607";
};
</script>

<style scoped>
.h-screen {
  align-items: center;
  background: linear-gradient(to left, #171a21, #1b2838);
}

.contact-card {
  background-color: #171a21;
  border-radius: 15px;
  width: 100%;
}

.social-links-card {
  background-color: #171a21;
  border-radius: 15px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.social-card {
  background-color: #171a21;
  transition: transform 0.3s ease-in-out;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-card:hover {
  transform: scale(1.2);
}
@media (max-width: 600px){
  
.social-card{
  padding-left: .3rem;
  padding-right: .3rem;

}
}
</style>
