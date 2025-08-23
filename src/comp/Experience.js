function Experience() {
  let experience_data = [
    {
      CompanyName: "Company 1",
      Time: "Nov 12 - Present",
      JobTitle: "Front End Developer",
      JobDecription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna."
    },
    {
      CompanyName: "Company 2",
      Time: "Jan 12 - Nov 10",
      JobTitle: "Technical Engg",
      JobDecription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna."
    },
    {
      CompanyName: "Company 3",
      Time: "Aug 12 - Jan 10",
      JobTitle: "Jr. Technical Engg",
      JobDecription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna."
    },
  ]

  return (
    <div>
      <h3 class="experience-title">Experience</h3>

      <div class="experience-wrapper">
        {
          experience_data.map(
            exp => (
              <div>
                <div class="company-wrapper clearfix">
                  <div class="experience-title">{exp.CompanyName}</div>
                  <div class="time">{exp.Time}</div>
                </div>

                <div class="job-wrapper clearfix">
                  <div class="experience-title">{exp.JobTitle} </div>
                  <div class="company-description">
                    <p>{exp.JobDecription}</p>
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}
export default Experience;