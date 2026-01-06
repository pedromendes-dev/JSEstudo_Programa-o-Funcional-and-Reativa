// 3. Reação a mudanças (Reactividade):


// Exemplo com Vue.js (framework reativo)
const app = {
    data() {
        return {
            mensagem: "Olá Vue!",
            contador: 0
        };
    },
    methods: {
        incrementar() {
            this.contador++;  // A UI atualiza AUTOMATICAMENTE!
        }
    }
};

// No template:
// <button @click="incrementar">Cliques: {{ contador }}</button>
// Quando contador muda, o template atualiza SOZINHO