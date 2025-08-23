function Hobbies()
{
    let hobbies_data = [
        {
          title: "Dancing"
        },
        {
            title: "Reading"
        },
        {
            title: "Listening Music"
        },
        {
            title: "Cooking"

            
        },

    ]
    return(
        <div class="section-wrapper clearfix">
        <h3 class="section-title">Hobbies</h3>
        <ul class="list-content">
				{
					hobbies_data.map(
						hob => (
							<li class="hobbies-percentage">{hob.title}</li>
						)
					)
				}
			</ul>
            </div>



    )
}
export default Hobbies;