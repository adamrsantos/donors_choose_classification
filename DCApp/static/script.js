var project_type_value;
        var project_category_value;
        var grade_level_value;
        var resource_value;

        var text = d3.select('#drop1').text("Project Type");

        var data_project_type = ["","Teacher-Led", "Professional Development", "Student Led"];

       var select_project_type = d3.select('#typeDropdown')
          .append('select')
            .attr('class','select')
            .on("change",function(d){
              var selected = d3.select(this).property('value');
              project_type_value = selected
            })
            
        var options_project_type = select_project_type
          .selectAll('option')
          .data(data_project_type).enter()
          .append('option')
            .text(function (d) { return d; });

        
        
          //Dropdown2

        var text = d3.select('#drop2').text("Project Category");
        
        var data_project_category = ["","Literacy & Language", "Math & Science", "Music & The Arts ","Health & Sports","Applied Learning",
        "Special Needs","History & Civics"];

       var select_project_category = d3.select('#categoryDropdown')
          .append('select')
            .attr('class','select')
            .on("change",function(d){
              var selected = d3.select(this).property('value');
              project_category_value = selected
            })
            
        var options_project_category = select_project_category
          .selectAll('option')
          .data(data_project_category).enter()
          .append('option')
            .text(function (d) { return d; });

        

      //Dropdown3

        var text = d3.select('#drop3').text("Grade Level");
        
        var data_grade = ["","Grades PreK-2","Grades 3-5","Grades 6-8","Grades 9-12"];

       var select_grade = d3.select('#gradeDropdown')
          .append('select')
            .attr('class','select')
            .on("change",function(d){
              var selected = d3.select(this).property('value');
              grade_level_value = selected
            })
            
        var options_grade = select_grade
          .selectAll('option')
          .data(data_grade).enter()
          .append('option')
            .text(function (d) { return d; });

      //Dropdown4

        var text = d3.select('#drop4').text("Resource Category");
        
        var data_resource = ["","Supplies","Technology","Books","Educational Kits & Games","Trips","Art Supplies"];


       var select_resource = d3.select('#resourceDropdown')
          .append('select')
            .attr('class','select')
            .on("change",function(d){
              var selected = d3.select(this).property('value');
              resource_value = selected
            })
            
        var options_resource = select_resource
          .selectAll('option')
          .data(data_resource).enter()
          .append('option')
            .text(function (d) { return d;})
            .attr("value", function(d){
            return d;
          })

//Draw Button

     var button_sub = d3.select('#sub_but')




        function getAndDrawChance(x1,x2,x3,x4,x5,x6){
        
          var test = [x1,x2,x3,x4,x5,x6]
       $.ajax({
         
         type: "POST",
         contentType: "application/json; charset=utf-8",
         url: "/score",
         dataType: "json",
         async: true,
         data: JSON.stringify(test),
         success: function (data) {
           var value = data["score"]
           var text = d3.select('#result');
           text.text(value);
           
         },
         error: function (result) {
          alert("Nope");
         }
       })

     }




button_sub.on('click',function(){
  getAndDrawChance(d3.select('#projecttitle').property("value"),
    d3.select('#projectcost').property("value"),
    project_type_value,project_category_value,grade_level_value,resource_value)
});