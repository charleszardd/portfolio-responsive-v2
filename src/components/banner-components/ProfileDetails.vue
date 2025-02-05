<template>
    <v-container class="profile-container custom-font" fluid>
        <v-row class="">
            <v-col class="" cols="12" md="2" lg="3">
               <div class="">
                    <!-- <div class="img-container d-flex justify-center" elevation="10">
                        <v-img src="/pfp.png"></v-img>
                    </div> -->
                    <h1 class="mb-lg-3 mb-md-2 mb-1 mt-3 text-subtitle-1 font-weight-bold text-md-h5 text-lg-h5">{{profile.name}}</h1>
                    
                    <v-row class="social-links mb-2">
                        <v-col class="d-flex " v-for="link in links" :key="link.socialLinkIcon" cols="auto">
                            <v-btn @click="goToLink(link.url)" elevation="10" class="mr-2 ">
                                <v-icon :class="`text-subtitle-1 text-lg-h5 ${link.color}`"> {{ link.socialLinkIcon }}</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <p class="text-subtitle-2 text-lg-subtitle-1">{{profile.description}}</p>

                
                <Button class="mt-1 btn"
                 icon="mdi-tray-arrow-down"
                  :height="buttonHeight"
                   :loading="isLoading"
                    :text="buttonText"
                    :isButtonRounded="false"
                     @click="downloadCV"
                    elevation="10"
                      />
               </div>
            </v-col>
        </v-row>
    </v-container>            
</template>
<script setup>
import axios from "axios";
import { ref} from "vue";


const isLoading = ref(false);


const profile = {
    name: 'Charles David P. Caseñas',
    description: `Fullsack Developer, passionate about creating innovative solutions and learning new technologies. `,
}

const goToLink = (url) => {
    window.open(url, '_blank');
}

const links =[
    { socialLinkIcon: 'mdi-github', color: '', url: 'https://github.com/charleszardd'},
    { socialLinkIcon: 'mdi-instagram', color: '', url: 'https://www.instagram.com/kasenyassshi/'},
    { socialLinkIcon: 'mdi-facebook', color: '', url: 'https://www.facebook.com/profile.php?id=100009432129470'},
    { socialLinkIcon: 'mdi-linkedin', color: '', url: 'https://www.linkedin.com/in/charles-david-case%C3%B1as-776aa8293/'},
    ];


const downloadCV = async() => {
    isLoading.value = true;
    try{
        const response = await axios.get('https://api-download-pdf-cv-production.up.railway.app/api/pdf-download-api',
            {
                responseType: 'blob',
                withCredentials: true,
                headers: {
                    Accept: 'application/pdf',
                    "Content-Type": 'application/pdf',
                },
            }
        );

        const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Charles David Caseñas' Resume.pdf");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    } catch(error){
         console.error("Error downloading resume:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      headers: error.response?.headers,
    });
    } finally{
        isLoading.value = false;
    }
} 
</script>
<style scoped>
/* .img-container{
    width:  350px;
    height: auto;
    border-radius: 50%;
    background-color: #f5f5f5;
    overflow: hidden;
    border: 1px solid black;
}
img{
    width: 100%;
    height: 100%;

} */
/* .profile-container{
    width: 500px;
} */
.social-links{
    display: flex;
    flex-direction: row;
}
</style>