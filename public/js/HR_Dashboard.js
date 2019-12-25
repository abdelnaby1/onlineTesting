$("#ListApp").click((e)=>{
    $.get("/hr/ListApplicants",(data)=>{
        var table = '<h1 class="mt-4">List of All applicants</h1>' +
            '<table class="table table-striped"><thead><tr>' +
            '<th scope="col">Student</th>' +
            ' <th scope="col">Position</th>' +
            '</tr></thead><tbody>';
        data.forEach((item)=>{
            table+='<tr>' +
                '<td>'+item["user_name"]+'</td>' +
                '<td>'+item["title"]+'</td>' +
                '<td>' +
                '<a href="#my_modal" class = "btn btn-primary" data-toggle="modal" data-book-id="">Preview</a>' +
                '</td>'
                +
                '</tr>'
        });
        table+="</tbody></table>";
        if($("#tableApp").text()=="")
            $("#tableApp").append(table);
    })
});

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});