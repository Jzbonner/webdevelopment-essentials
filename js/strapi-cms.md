# Strapi CMS + A Versatile Backend Layer for Web Applications 
For small to medium sized projects that are benefitted by having a single
source of truth for content management. This is a neat tool for aiding in the
development of static websites, corporate websites, mobile applications,
editorial site, and minimal ecommerce sites. 

## up and running with Strapi
Configuring the admin panel can be done through the `app.js` file of the admin dir: 
```
## file located at: 
./backend/src/admin/app.js
```

Configuring your strapi admin dashboard is done through a config declaration
within your app.js file. There are a number of predefined options to work with
and extensibility to add your own configurations to the admin dashboard as
well. 

Here is an example app.js file with customization options: 

```
import BrandLogo from "./extensions/brandLogo.png"
import favicon from "./extensions/favicon.ico"

export default {
  config: {
    locales: ["fr", "cs", "de", "dk", "es"],
    auth: {
      logo: BrandLogo,
    },
    head: {
      favicon: favicon,
    },
    menu: {
      logo: BrandLogo,
    },
    theme: {
      colors: {
        primary100: "#e9f9f7",
        primary200: "#bdccd7",
        primary500: "#6e7c90",
        primary600: "#404558",
        primary700: "#2b2c35",
        danger700: "#b72b1a",
      },
    },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "think. broadly.",
      },
    },
  },
  bootstrap(app) {
    console.log(app)
  },
}
```

> refer to the strapi admin documentaion [here](https://bit.ly/3If4hZv)

Outside of the pre-defined admin configuration options you will be able to
alter base theme elements via the Injection Zones API. Strapi can use
predefined inejection zones or custom injection zones created by a plugin. 

## admin panel UI configuration
Configuring your admin panel is important for branding consistency and
enabling certain configuration layers based of user permissions and access
rights. 

### theme collection for strapi backend 
```
// strapi theme - shades of purple
theme: {
      colors: {
        primary100: "#f6ecfc",
        primary200: "#e0c1f4",
        primary500: "#ac73e6",
        primary600: "#9736e8",
        primary700: "#8312d1",
        danger700: "#b72b1a",
      },
    },
// strapi theme - shades of nord 
theme: {
      colors: {
        primary100: "#e9f9f7",
        primary200: "#bdccd7",
        primary500: "#6e7c90",
        primary600: "#404558",
        primary700: "#2b2c35",
        danger700: "#b72b1a",
      },
    },
// strapi theme - shades of dodger 
theme: {
      colors: {
        primary100: "#cb6b06",
        primary200: "#e69138",
        primary500: "#ffffff",
        primary600: "#f6f6f6",
        primary700: "#484848",
        danger700: "#b72b1a",
      },
    },
```

