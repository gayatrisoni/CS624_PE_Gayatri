# CS624_PE_Gayatri

# PE01

Input: The program is basic React Native application that will display user information like name, degree, and university name. The input of this program is static or hardcoded. 

Process: The App component is a functional component that renders a View container. Inside this container, three Text components are used to display the user's information. The styling for the container is defined using a StyleSheet, setting the background color to yellow and centering the content both horizontally and vertically.

Output: The output of this program is a mobile application screen that displays the user's information in a centered layout on a yellow background. The output doesn't involve any user interaction or dynamic data. It's a static display of information.

# PE02
![image](https://github.com/gayatrisoni/CS624_PE_Gayatri/assets/54921052/a9afd524-46dd-40c3-b89a-93048023a985)

Input: The program is basic React Native application that will display a image, textInput where we can enter text, some courses for core reuirements and depth of study courses.

Process: This is functional component that renderse input by displaying on the screen. Additionally the app incorporates hardcoded data for core, depth of study courses. The app also uses ScrollView to ensure that all course information is accessible, if it exceeds the screen size.

Output: The output is displayed within the app, allowing the user to easily view and interact with the course information. This structured model ensures a clear flow of data from input to processing and finally to the output, resulting in an intuitive user experience.

# PE03
#PE03 Part1:
![button](https://github.com/gayatrisoni/CS624_PE_Gayatri/assets/54921052/30f04edb-2543-468c-8d05-a86af25e8874)

#PE03 Part2:
![TabBar](https://github.com/gayatrisoni/CS624_PE_Gayatri/assets/54921052/29001758-4a92-405c-a117-16330a639734)

Input: The program is React Native to-do-application, takes user input throught a text Input field. The input represents the tasks the user wants to add their to-do-list. The input valuse is stored in the components's state as inputValue. Also their is tab bar which filter task based on active or done.

Process: upon pressing submit button, the program triggers the submitTodo fucntion that checks if the input is empty or contains only whitespace. If so, it return nothing. otherwise, it creates a new to-do object with a title, a unique index(todoIndex), and a complete property set to false. The new to-do item is added to the todos array in the state and update the list. After that the input field is reset.

Output: The output of the program is a visual representation if to-do list. This is displayed in the app's internface, where each task is listed. The user can add more task and they will append the list.

# PE04:
Input: The React Native application is designed to display user profile cards. The input for each card includes user data such as the image, name, occupation, description, showThumbnail flag, and an onPress function. The data array holds multiple user profiles, each profile initialized with the same information for demonstration purposes.

Process: The program uses the ProfileCard component to render individual user cards. The handleProfileCardPress function in the parent component manages the state, toggling the showThumbnail property when a card is pressed. The styling, defined in the StyleSheet, make sure a visually appealing layout with platform-specific adjustments for shadows (iOS) and elevation (Android). The rendering logic maps over the user data, creating instances of the ProfileCard component, and organizes them into rows.

Output: The output is a user-friendly interface displaying profile cards in rows, each containing three cards. Users can press a card to toggle between a full-size view and a thumbnail view. The visual representation includes user images, names, occupations, and descriptions. Overall, the program provides an interactive and dynamic way to showcase user profiles in a mobile application.

# PE05:

![AddCountry](https://github.com/gayatrisoni/CS624_PE_Gayatri/assets/54921052/0a35df4e-c4a2-4dd1-aba4-94ce01df5d04)

![NoSavedCountry](https://github.com/gayatrisoni/CS624_PE_Gayatri/assets/54921052/c5e94dd5-5fb6-4edc-b9ba-b0a59b6b0f01)

![Countries](https://github.com/gayatrisoni/CS624_PE_Gayatri/assets/54921052/a2648f06-bd47-4fb1-90fd-c8b7a4576836)



Input: The react native application display four tabs cities, addCity, countries, addCountry using tab baed navigation. The addCity tab will take input as city name and country name and a submit button. The addCountry tab will take input as country name and currency and submit button.

Process: the programme uses four component addCity, addCountry, countries, cities. The addCity component will take input as city name and country name and store city and country in cities tab using submit button. The addCountry tab will take input as country name and currency name and store this information in coutries tab using submit button and navigate to coutries page that will display information.

Output: The output utilizes tab based navigation and display city name and coutry name in cities tab and country and currency in countries tab. The appliaction display tabs at the bottom. The app also uses a resuble component. 

# PE06

Input: the react native application manage data related to cities and coutries. The application expected to provide inuput for cities and coutries through user interface. The program prompts users to add cities and location within cities, countries and currencies associated with countries.

Process: the application shows how the program adds cities, locations, countries, and currencies to the internal state. The addCity, addCountry and addCurrency method handles logic for user provides information into the data strctures.

Output
The Output section diaplay details what users can expect as a result of their interactions with the program. In this context, the program showes that the program maintains a state of cities, locations, countries, and currencies, and users will see the updated information on the screen. 
