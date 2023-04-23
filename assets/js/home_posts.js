{
    let createPost=function(){
        let newPostsForm=$('#new-post-form');
        newPostsForm.submit(function(e){
            e.preventDefault();

            $.ajax({
                type:'post',
                url:'/posts/create',
                data:newPostsForm.serialize(),
                success:function(data){
             
                    console.log(data);
                },error: function(error){
                    console.log(error.responseText);
                }
            })
        });
    }
    createPost();
}