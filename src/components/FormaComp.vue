<template>
    <div class="container mx-auto py-6">
        <h1 class="text-2xl font-semibold">Регистрация</h1>
        <div class="registration">
            <input v-model="registration.name" class=" block border border-black w-1/3 p-2  my-4 rounded-md " type="name" name="mail" placeholder="Имя">
            <input v-model="registration.surname" class=" block border border-black w-1/3 p-2 my-4 rounded-lg" type="surname" name="mail" placeholder="Фамилия">
            <input v-model="registration.email"  class=" block border border-black w-1/3 p-2 my-4 rounded-lg" type="email" name="mail" placeholder="Email">
            <button class="w-1/3 text-xl mt-2 text-white bg-blue-600 p-4 rounded-lg">Регистрация</button>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            registration:{
                name: "",
                surname: "",
                email: ""
            }
        }
    }
}
</script>