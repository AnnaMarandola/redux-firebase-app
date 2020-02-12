const initState = {
    projects: [
        {id: "1", url: "https://hips.hearstapps.com/pop.h-cdn.co/assets/17/01/1600x800/landscape-1483628434-einstein-lede1.jpg?resize=768:*", title: "Einstein's riddle", content:"Il y a 5 maisons dans la rue et chacune a une couleur différente. Dans chaque maison habite une personne de chaque nationalité différente. Chacune de ces personnes a une boisson, une marque de cigarette et un animal domestique préférés. Aucune de ces personnes ne boit la même boisson, ne fume les mêmes cigarettes et n'a le même animal que son voisin. Question : à qui appartient le poisson ? "},
        {id: "2", url: "https://www.nautiljon.com/images/more/00/83/56038.jpg", title: "Yakikate!! L'enigme du boulanger", content:"Un boulanger doit faire cuire 3 grosses galettes dans son four. La cuisson doit être de 3 minutes de chaque coté. Malheureusement le four est trop petit pour que les trois galettes rentrent. Seule deux galettes peuvent être présente dans le four en même temps. Combien de temps le boulanger mettra pour faire cuire toutes ces galettes?"},
        {id: "3", url: "https://anigamers.com/uploads/entries/Bartender2_20150404224430.jpg", title: "Verre vide / Verre plein", content: "6 verres de vin sont alignés sur un comptoir les uns à coté des autres. Les trois premiers sont remplis de vin et les trois autres sont vides. Pouvez-vous faire en sorte que les verres pleins et vides soient alternés, en ne touchant qu'un seul verre"}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;