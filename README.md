# UrNBA - A webpage for NBA Player Strength Visualization
This project aims to come up with a webpage for NBA Player Strength Visualization. The programming focus would be on how to design/build components and how to communicate between UI interactions using Reactjs. The backend player data comes from stats.nba.com.

# Node.js and NPM
I would like to use npm to mangage my JavaScript packages. Since the newest version of Node.js has npm already included, I installed Node.js on my machine. I use IntelliJ as my IDE. The terminal inside Intellij made the whole setting up process pretty straightforward. 

# The final view of our web-page
Before going into any detail, I would like to show the final view of our web-page first:
![web-page](https://github.com/ZjWeb200/UrNBA/blob/master/nba.JPG)
As you can see, the default player is James Harden. You can type your favorite player's name in the search bar, and his records will be shown in the main section. The slider bar under the shot chart corresponds to "shots with frequency greater or equal to your specified number".

# The Reactjs components structure of our web-page
With the final web-page in mind, we can start to design how many and what components should we use. I think this is the most important step in a Reactjs project. Without this big picture, data passing between components would be a demon dancing in our minds, and sooner or later, our code becomes a spaghetti. So, always design before coding! <br/>
All components in this project are class components. Parent component pass data to children by props. Children components pass data back to parent by callback functions. Siblings passing data to each other by LCA (lowest common ancestor). One of the most elegant parts of Reactjs is that automatic re-rendering happens during these state changes. <br/>
The project component structure:
![components](https://github.com/ZjWeb200/UrNBA/blob/master/components.png)

The top App would be our root in Reactjs. Under App, we have TopNavBar, this is just the top bar with NBA logo and text "NBA". <br/>
Under Main, we have our major components. The SearchBar corresponds to our searching bar. The Profile corresponds to player profile on the left. It shows the player's name, image, team logo, team name, and other basic personal information. <br/>
Under DataViewContainer, we have ShotChart, which shows shotting information of the player in Season 2018-19. The CountSlider allows user to customize and dig more into details of the player's shot statistics. 

# Coding in Reactjs
Finally, we can start to write code using Reactjs in Intellij. You can check all the codes in the src folder. One thing I have to point out is that I utilized packages like [d3-shotchart](https://www.npmjs.com/package/d3-shotchart) and [Ant Design](https://ant.design/). They are simply installed by npm, and have saved me so much time and effort. Without them, I have to code my own hexbin or auto-complete search bar. These packages help me to focus more on the design instead of too much details on implementations.

# Try it out!
The webpage is at: https://zjweb200.github.io/UrNBA/
