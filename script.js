var listaFilmes = [
  "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
  "https://br.web.img2.acsta.net/pictures/19/06/11/21/33/0075880.jpg",
  "https://m.media-amazon.com/images/M/MV5BZTg5YjE1YzktYjRmZC00Y2VjLThiMDItOTcwODRhMjRjZDQ1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/08/82/20128877.JPG",
]

/* listaFilmes[0] = "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg"

listaFilmes[1] = "https://br.web.img2.acsta.net/pictures/19/06/11/21/33/0075880.jpg"

listaFilmes[2] = "https://m.media-amazon.com/images/M/MV5BZTg5YjE1YzktYjRmZC00Y2VjLThiMDItOTcwODRhMjRjZDQ1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg" */

// //i++ é o mesmo que i=i+1
for (var i = 0; i < listaFilmes.length; i++) {
  if (listaFilmes[i].endsWith("jpg" || "JPG" || "png" || "PNG")) {
    document.write("<img src=" + listaFilmes[i] + ">" + nomeFilmes[i])
  }
}

/* var i = 0
while (i < listaFilmes.length) {
  document.write("<img src=" + listaFilmes[i] + ">")
  i++
} */

/* var filme =
  "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg"

var serie = "https://br.web.img2.acsta.net/pictures/19/06/11/21/33/0075880.jpg"

var desenho =
  "https://m.media-amazon.com/images/M/MV5BZTg5YjE1YzktYjRmZC00Y2VjLThiMDItOTcwODRhMjRjZDQ1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg"

document.write("<img src=" + filme + ">")
document.write("<img src=" + serie + ">")
document.write("<img src=" + desenho + ">")
 */
