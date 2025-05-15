export type MenuItem = {
  key: string;
  label: string;
  children?: MenuItem[];
};

export const menu: MenuItem = {
  key: "00",
  label: "Menu Principal",
  children: [
    {
      key: "1",
      label: "Transfert d'argent",
      children: [
        { key: "1.1", label: "Orange Money" },
        { key: "1.2", label: "Airtel Money" },
        { key: "1.3", label: "MVola" },
        { key: "1.4", label: "IZY CASH" },
        { key: "1.5", label: "Banque & Microfinance" },
        { key: "1.6", label: "Faire livrer du cash" },
      ],
    },
    {
      key: "2",
      label: "Services Orange",
      children: [
        { key: "2.1", label: "Achat Credit et offres Orange" },
        { key: "2.2", label: "Bonus" },
        { key: "2.3", label: "Facture Orange" },
        {
          key: "2.4",
          label: "Récuperer mon numéro (avec une nouvelle carte SIM)",
        },
        { key: "2.5", label: "Bon Plan Orange Money" },
      ],
    },
    { key: "3", label: "Paiements & Partenaires" },
    { key: "4", label: "Services financiers" },
    { key: "5", label: "Mon compte" },
    { key: "6", label: "Carte VISA Akory" },
    { key: "7", label: "Compte Karama" },
    { key: "8", label: "Retrait" },
  ],
};
