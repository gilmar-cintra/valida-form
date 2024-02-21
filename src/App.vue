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
              <v-text-field v-model="nome" label="Nome"></v-text-field>
              <v-text-field
                v-model="email"
                label="E-mail"
                type="email"
              ></v-text-field>
              <v-text-field v-model="telefone" label="Telefone"></v-text-field>
              <v-text-field
                v-model="documento"
                label="CPF / CNPJ"
              ></v-text-field>
              <v-text-field v-model="cargo" label="Cargo"></v-text-field>
              <v-btn color="purple-darken-2" dark>Salvar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>
            <h1 class="text-uppercase bg-purple-darken-2 pa-3">
              <v-icon left>mdi-account-group</v-icon>
              Colaborador
            </h1>
          </v-card-title>
          <v-card-text>
            Nome: {{ nome }} <br />
            E-mail: {{ email }} <br />
            Telefone: {{ telefone }} <br />
            Documento: {{ documento }} <br />
            Cargo: {{ cargo }} <br />
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
//
export default {
  name: "App",
  data: () => ({
    //
    nome: "",
    email: "",
    telefone: "",
    documento: "",
    cargo: "",
    rules: {
      required: (value) => !!value || "Campo obrigatório",
      email: (value) => {
        const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        return pattern.test(value) || "E-mail inválido";
      },
      telefone: (value) => {
        const pattern = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;
        return pattern.test(value) || "Telefone inválido.";
      },
      min: (value) => value.length >= 8 || "Valor inserido é muito curto.",
      max: (value) => value.length <= 60 || "Valor inserido é muito longo.",
    },
  }),
  methods: {
    //
  },
};
</script>
