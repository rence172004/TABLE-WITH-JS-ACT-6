$(() => {
    fetch("data.json")
    .then((rawData) => rawData.json())
    .then(data => {
        console.log(data);
        courseData = data;


        const semlevels =[
            "First Year, First Semester",
            "First Year, Second Semester",
            "Second Year, First Semester",
            "Second Year, Second Semester",
            "Third Year, First Semester",
            "Third Year, Second Semester",
            "Fourth Year, First Semester",
            "Fourth Year, Second Semester",
        ];

        let semCount = 0;

        semlevels.forEach(semlevel => {
            
            $("#table-with-data").append(
                `
                    <tr class="sem">
                        <td colspan="7">${semlevel}</td>
                    </tr>
                        <tr class="semheader">
                            <td>Course</td>
                            <td>Description</td>
                            <td>Unit</td>
                            <td>Grade</td>
                            <td>Remarks</td>
                            <td>Course</td>
                            <td>Term</td>
                        </tr>
                `
            );

            data.forEach(course => {
                if(course["semlevel"] - 1 == semCount){
                    const takenClass = course["coursetaken"] === "yes" ? "blue" : course["coursetaken"] === "rn" ? "yellow" : "";
                    $("#table-with-data").append(
                        `
                            <tr class="${takenClass}">
                                <td>${course["course"]}</td>
                                <td>${course["desc"]}</td>
                                <td>${course["unit"]}</td>
                                <td>${course["grade"]}</td>
                                <td>${course["remarks"]}</td>
                                <td>${course["course"]}</td>
                                <td>${course["term"]}</td>
                            </tr>
                        `
                    );
                }
                
            });
            semCount++;
        });
    });
});