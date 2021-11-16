# Client for Divvy, a menu planning app

Divvy is an app that is intended to be used by busy adults to share in meal planning responsibilities. You can only make one menu per date so there aren't duplicate days. You can also put together a shopping list for the menu you created, so the user knows exactly what they need to make the meal for that specific date.

## Roles:

The app has three roles: Admin, creator, and user. When you sign up initially you are automatically an admin. The admin can create new accounts for people they'd like to share in the meal planning. The admin will then assign the other roles. If a user is a creator, they will have access to planning menus and creating shopping lists. as well as updating and deleting their menus. If they are a user, they will only see the menus and shopping lists that have been created by an admin or creator. The admin can update the other users if they would like to switch roles between users. They can also delete other users.

## Dependencies and Libraries:

The Divvy client is built with the Create React App. Reactstrap was used to build components, such as tables and forms. Styled Components was utilized for the styling. React-router-dom was used for navigating throughout the app. Moments.js was used to format dates.

## Data:

There are three tables used for storing data via Postgres. There is a table for users, a table for storing the menus, and one for the shopping lists. The users can own many menus and shopping lists.

## Future Versions:

Divvy 2.0 has many possibilities for an improved user experience. I would like to improve the display of the menus and shopping lists, including displaying them by ascending order, while also making them searchable by date. I would also like to make it so the users only have access to their groups information, including the admin only having administrative duties for their specific group. I would also like to add another table called the recipe box, where a user can store feedback on the recipes they have tried. The shopping list having more functionality, such as utilizing a checklist or being able to be downloaded, is also a future possibility. Lastly, I may implement adding access to a recipe API for users to look to for inspiration.



### Divvy Server Repo
[Divvy Server Repo on Github](https://github.com/MsKaraBSmith/DIvvy-Server)



### Divvy Live Deployment on Heroku
[Divvy](https://kbsdivvyclient.herokuapp.com/)

