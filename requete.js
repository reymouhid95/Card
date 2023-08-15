// Le menu principal
function afficherMenuPrincipal() {
  prompt(
    "Menu principal :\n" +
      "1. Solde de mon compte\n" +
      "2. Transfert d’argent\n" +
      "3. Paiement de facture\n" +
      "4. Achats de crédit\n" +
      "5. Quitter"
  );
}

// Le menu de transfert d'argent
function afficherMenuTransfert() {
  prompt(
    "Menu de transfert d'argent :\n" +
      "1. Saisir le montant à transférer\n" +
      "2. Quitter"
  );
}

// Le menu du mode de paiement
function afficherMenuPaiement() {
  prompt(
    "Menu de paiement de facture :\n" +
      "1. Liquide\n" +
      "2. Chèque\n" +
      "3. Quitter"
  );
}

// Fonction principale
function main() {
  // Solde par defaut
  let solde = 150000;

  while (true) {
    afficherMenuPrincipal();
    const choixPrincipal = parseInt(prompt("Choisissez une option:"));

    switch (choixPrincipal) {
      case 1:
        alert(`Votre solde est de ${solde} FCFA`);
        break;
      case 2:
        afficherMenuTransfert();
        const choixTransfert = parseInt(prompt("Choisissez une option:"));

        if (choixTransfert === 1) {
          const montantTransfert = parseFloat(
            prompt("Saisissez le montant à transférer:")
          );
          if (montantTransfert <= solde) {
            solde -= montantTransfert;
            alert(`Montant transféré: ${montantTransfert} FCFA`);
          } else {
            alert("Solde insuffisant pour effectuer le transfert.");
          }
        }
        break;
      case 3:
        afficherMenuPaiement();
        const choixPaiement = parseInt(prompt("Choisissez une option:"));

        if (choixPaiement === 1) {
          const montantPaiement = parseInt(
            prompt("Saisissez le montant en liquide:")
          );
          if (montantPaiement <= solde) {
            solde -= montantPaiement;
            alert(`Paiement en liquide de ${montantPaiement} FCFA effectué.`);
          } else {
            alert("Solde insuffisant pour effectuer cette opération.");
          }
        } else if (choixPaiement === 2) {
          const montantPaiement = prompt("Saisissez le montant en chèque:");
          alert(`Paiement par chèque de ${montantPaiement} FCFA effectué.`);
        }
        break;
      case 4:
        const numeroTelephone = prompt("Entrez le numéro de téléphone:");
        const montantCredit = parseFloat(
          prompt("Entrez le montant du crédit:")
        );
        alert(
          `Achat de crédit de ${montantCredit} FCFA pour le numéro ${numeroTelephone}.`
        );
        break;
      case 5:
        alert("Merci d'avoir utilisé notre service. Au revoir !");
        return;
      default:
        alert("Option invalide. Veuillez sélectionner une option valide.");
    }
  }
}

// Fonction principale
main();
