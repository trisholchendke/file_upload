
          $(function(){
            Tags.bootstrapVersion = "2";
            $("#small").tags({
              tagSize: "sm",
              suggestions: ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"],
              tagData: ["juliett", "kilo"]
            });
            $("#large").tags({
              tagSize: "lg",
              suggestions: ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"],
              tagData: ["juliett", "kilo"]
            });
            $("#medium").tags({
              suggestions: ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"],
              tagData: ["juliett", "kilo"]
            });
            $("#readOnly").tags({
              readOnly: true,
              tagData: ["juliett", "kilo"]
            });
            $("#suggestOnClick").tags({
              restrictTo: ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"],
              suggestions: ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"],
              promptText: "Click here to add new tags",
              suggestOnClick: true
            });
            $("#caseInsensitive").tags({
              suggestions: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"],
              tagData: ["india", "juliett"],
              caseInsensitive: true
            });
            $("#maxNumTags").tags({
              suggestions: ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india"],
              tagData: ["alpha", "bravo", "charlie"],
              maxNumTags: 3
            });
          });
