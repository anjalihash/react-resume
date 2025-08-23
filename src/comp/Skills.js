function Skills() {
	let Skills_data = [
		{
			title: "HTML/CSS"
		},
		{
			title: "PowerPoint"
		},
		{
			title: "React"
		},
		{
			title: "Excel"
		},
		{
			title: "ASP.Net"
		},
		{
			title: "SQL"
		},
		{
			title: "Figma"
		},
		{
			title: "Python"
		},


	]

	return (
		<div class="section-wrapper clearfix">
			<h3 class="section-title">Skills</h3>
			<ul class="list-content">
				{
					Skills_data.map(
						skl => (
							<li class="skill-percentage">{skl.title}</li>
						)
					)
				}
			</ul>


			
		</div>
	)
}
export default Skills;



