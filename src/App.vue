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
            <v-form ref="form">
              <v-text-field
                v-model="nome"
                label="Nome"
                :rules="[rules.required, rules.min, rules.max]"
                class="mb-3"
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="E-mail"
                type="email"
                :rules="[rules.required, rules.email]"
                class="mb-3"
              ></v-text-field>
              <v-text-field
                v-model="telefone"
                label="Telefone"
                :rules="[rules.required, rules.telefone]"
                v-mask="['(##) #####-####', '(##) ####-####']"
              ></v-text-field>
              <v-text-field
                v-model="documento"
                label="CPF / CNPJ"
                :rules="[rules.required]"
                v-mask="['###.###.###-##', '##.###.###/####-##']"
                class="mb-3"
              ></v-text-field>
              <v-text-field
                v-model="cargo"
                label="Cargo"
                :rules="[rules.required]"
                class="mb-3"
              ></v-text-field>
              <v-btn color="purple-darken-2" @click="submitForm" dark
                >Salvar</v-btn
              >
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
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log("nome: ", this.nome);
        console.log("email: ", this.email);
        console.log("telefone: ", this.telefone);
        console.log("documento: ", this.documento);
        console.log("cargo: ", this.cargo);
      }
    },
  },
};
</script>
