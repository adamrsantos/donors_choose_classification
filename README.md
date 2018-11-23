# Donor's Choose Classification Project

The purpose of this project is to look at data from the website Donor's Choose. The purpose of the website is to connect teachers who want additional funding for projects with donors who want to donate to education projects. Teacher's submit projects to the site and include a narrative of their project as well as what items they wish to purchase. My aim was to predict whether or not a project would be funded at the time of submission. If Donor's Choose had this information, they could automatically approve some projects while spending additional resources on projects that needed more attention. 

Steps:
1) Download the data from Kaggle and perform exploratory data analysis.
    -1.1 million projects, 400k teachers, 73k schools
    -~80% funded, ~20% not funded
2) Feature Engineering
    -Numerical features (eg, project cost)
    -One hot encode categorical features (eg, project grade)
    -Combine with teacher and school data
    -Add text features (using tfidf) of project titles and narratives
    -Adjust class weights to account for class imbalance
3) Model Building
    -Logistic Regression
    -Random Forest
    -Gradient Boosting
4) Analyze Results
    -Perform analysis on which projects the model (best was gradient boosting) predicted incorrectly
5) App Creation
    -I created a flask app to demonstrate how the model could be used with the website when a teacher submits a project
6) [Presentation](https://docs.google.com/presentation/d/1sgdbRCGFOVAiT_4oTncEWEJW0x676xwRoQCVC4R5yPE/edit?usp=sharing)
