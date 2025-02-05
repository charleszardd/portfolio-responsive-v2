<template>
    <v-container class=" main-container px-5 px-lg-10" fluid>
        <!-- <v-row class="pt-10 d-flex justify-end">
            <Button icon="mdi-chat-question" class="bg-primary " text="Chat Kasenyashi" />
        </v-row> -->
        <v-row class="items">
        
            <v-col class="hero-container">
                <div class="bg-img"></div>
                <h1 class="text-h5  text-lg-h2 hero-font font-weight-bold">{{profile.name}}</h1>
                <p class="custom-font text-grey-lighten-2 mt-3 mt-lg-5 text-h6">{{profile.role}}</p>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
const profile = {
    name: 'Charles David P. Caseñas',
    role: 'Fullsuck Developer',
};
</script>
<style scoped>
.main-container{

    /* color: #212121; */
}
.items{
    height: 100vh;
}
.hero-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


}
.bg-img{
 
}
</style>