<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card>
          <v-card-title>
            <h1 class="text-uppercase bg-purple-darken-2 pa-3">
              <v-icon left>mdi-account-plus</v-icon>
              Novo Colaborador
            </h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field label="Nome"></v-text-field>
              <v-text-field label="E-mail"></v-text-field>
              <v-text-field label="Telefone"></v-text-field>
              <v-text-field label="CPF / CNPJ"></v-text-field>
              <v-text-field label="Cargo"></v-text-field>
              <v-btn color="primary" dark>Salvar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//
</script>
