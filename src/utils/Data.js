const axios = require("axios");
export const uri = "http://arenagamer.gear.host";

export const getObject = (
  NomeEquipe,
  LiderEquipe,
  NumLider,
  Whatsapp,
  EmailLider,
  Participante,
  Conhecimento
) => {
  return {
    NomeEquipe: NomeEquipe,
    LiderEquipe: LiderEquipe,
    NumLider: NumLider,
    Whatsapp: Whatsapp,
    EmailLider: EmailLider,
    Participantes: Participante,
    Conhecimento: Conhecimento,
  };
};

export const Cadastrar = (object, callback) => {
  axios
    .post(uri + "/api/values", object)
    .then(() => {
      alert("Equipe Cadastrada com sucesso, entraremos em contato para explicar os próximos passos. Boa sorte.")
      callback();
    })
    .catch((error) => {
      alert(error);
    });
};
