<template>
    <div class="cadastro-cliente">
        <h1>Cadastro de Cliente</h1>
        <form>
            <div>
                <label for="nome">Nome:</label>
                <input type="text" id="nome" v-model="nome" required>
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadastroCliente'
};
</script>

<style scoped>
.cadastro-cliente {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
</style>