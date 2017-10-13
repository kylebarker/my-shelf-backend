
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('my_shelf').del(),

    // Inserts seed entries
    knex('my_shelf').insert({artist: "Prince and the Revolution", album: "Purple Rain", year: "1984", genre: "Rock", image_url: "https://upload.wikimedia.org/wikipedia/en/9/9c/Princepurplerain.jpg", label: "Warner Bros" }),
    knex('my_shelf').insert({artist: "David Bowie", album: "Aladdin Sane", year: "1973", genre: "Rock", image_url: "https://upload.wikimedia.org/wikipedia/en/6/6e/DavisBowieAladdinSane.jpg", label: "RCA Records" })


  );
};
