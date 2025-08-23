import './Skills.css';

function Skills() {
	let Skills_data = [
		{
			title: "HTML/CSS",
			percent: "80",
			class: "eighty"
		},
		{
			title: "PowerPoint",
			percent: "80",
			class: "eighty"
		},
		{
			title: "React",
			percent: "55",
			class: "fifty-five"
		},
		{
			title: "Excel",
			percent: "60",
			class: "sixty"
		},
		{
			title: "SQL",
			percent: "60",
			class: "sixty"
		},
		{
			title: "Figma",
			percent: "70",
			class: "seventy"
		},
		{
			title: "Python",
			percent: "60",
			class: "sixty"
		},


	]

	return (
		<div class="section-wrapper col-md-6">
			<h3 class="section-title">Skills</h3>
			{

			Skills_data.map(
				skl => (
				<div class="skill-item">
					<div class="skill-header">
						<span class="skill-name">{skl.title}</span>
						<span class="skill-percentage">{skl.percent}%</span>
					</div>
					<div class="progress-bar-container">
						<div className={"progress-bar "+skl.class}></div>
					</div>
				</div>
				)
			)

			}

		</div>
	)
}
export default Skills;



