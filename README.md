<h1>Sneakaz</h1>

A web-app that enables designers to quickly cycle through generated color palettes and make better design decisions.

[Hosted on Heroku](https://arcus-color-palette.herokuapp.com/PaletteCreator)

[Demo Video](https://www.youtube.com/watch?v=bGZpIQvYvWg)

## Design Ideas

<img alt="arcus logo" src="src/images/Arcus Wheel Gif.gif" width="320px" height="200px">

I wanted the UI to be clean and not distract from the colors in the palettes.

Color palettes are generated as the user manipulates diffrent sliders. All palettes have 5 diffrent colors. The first color in the pallet is the "key color" AKA the direct output of the sliders. Only 1-3 colors in each palette have a diffrent hue, the other colors only vary in saturation and lightness. The hue variations are based in color theory relationships(analogus, complementary, split complementary).

<img alt="arcus logo" src="src/images/ArcusMockupgif.gif" width="320px" height="200px">

Recoloring mockups on a click is quick and easy solution for testing out diffrent color ideas.

All of the mockups are SVGs and the fill color of their parts are changed through state in Arcus's Redux store. I've made five diffrent mockups that embody common graphic design visuals(a website, logo, buisness card, etc.).

## Bulit With

* [React](https://reactjs.org/) - web library used for building the interface
* [Redux](https://redux.js.org/) - used to declaratively pass and manipulate reusable state to all components
* [react-router](https://reacttraining.com/react-router/) - for page navigation
* [react-responsive](https://www.npmjs.com/package/react-responsive) - for media queries / responsive design
* [JSS](https://cssinjs.org/?v=v10.0.0-alpha.13) - to manipulate CSS attributes based on state
* [React Circular Color](https://www.npmjs.com/package/react-circular-color) - used this hue slider
* [Scalable Vector Graphics (SVGs)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) - for mockup images created in [Adobe Illustrator](https://www.adobe.com/products/illustrator.html)
* [Ruby on Rails](https://rubyonrails.org/) - to save palettes for reuse in different mockups, in a **has_many :through** domain model
* [postgreSQL](https://www.postgresql.org/) - as the database
* [bcrypt](https://rubygems.org/gems/bcrypt/versions/3.1.12) - to hash user passwords for real auth
* [JSON Web Token (JWT)](https://rubygems.org/gems/jwt/versions/1.5.4) - for secure login storage

### Additional Notes

I'm planning on creating a native app and user uploaded mockups in the future.
Named after the Roman goddess of rainbows.

[Backend repo](https://github.com/EvanPavley/arcus-backend)
