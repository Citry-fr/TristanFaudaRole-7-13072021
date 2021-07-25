<template>
    <div>
        <h1>Formulaire d'inscription</h1>
        <SignupForm />
    </div>
</template>

<script>

import SignupForm from '../components/SignupForm.vue'

export default {
    name: 'Signup',
    components: {
        SignupForm
    }
}
</script>