// this is simply stuff I cut from about.component. I can put it back in if I need to make changes to it

teamMembers: TeamMember[] = [
    new TeamMember(
      'Tom Morrison, Phd',
      'Founder, Ecologist, Conservation Biologist',
      'Tom  founded Greenstand because “it’s a really cool idea”. In Tom-ese, that means it combines his passion for science and technology with life-changing and world-changing work. His love for big data, research and complex and challenging applications of technology make him the perfect fit as our visionary, organizational leader, data monitor, chief of biodiversity… and several other titles we invented to make him feel as special and integral as he is.',
      '../../assets/images/team-members/TomMorrison.jpg'
    ),
    new TeamMember(
      'Alicia Davis, Phd',
      'Co-Founder, Anthropologist',
      'Alicia has extensive experience in remote parts of East Africa. She has planted trees and worked on social/environmental issues all over the world. Her passion and expertise in cultural anthropology are an invaluable asset to our work. Besides her role in long term planning, she keeps us realistic about the social and/environmental impact of this project, zeroing in on strengths and weaknesses in our processes and vision.  “Nurture nature and social welfare from the roots up.” is her mode of operation and why she volunteers with GreenStand.',
      '../../assets/images/team-members/AliciaDavis.jpg'
    ),
    new TeamMember(
      'David Ezra Jay',
      'Co-Founder',
      'David has spent a decade volunteering with humanitarian organizations looking for solutions to poverty- driven environmental issues. He believes this project can provide widespread environmentally-sound employment, improving the lives of impoverished people worldwide. He looks forward to seeing Greenstand obviate the devastation of fragile landscapes by clear cutting trees for charcoal and subsistence agriculture. He loves to defy gravity, whether it’s in an airplane or on a tree swing with his kids.',
      '../../assets/images/team-members/David-Ezra-Jay.jpg'
    ),
    new TeamMember(
      'Robert Rice',
      'Project Manager',
      'Rob is one of the guys we go to when we are really stuck on an exceedingly difficult problem. He has extensive experience in project management, software development and nonprofit management. When he is not being a nerd he can be found teaching his daughter who to fly airplanes. He works with GreenStand because we pester him and send him beer.',
      '../../assets/images/team-members/RobertRice.jpg'
    ),
    new TeamMember(
      'Sebastian Gertner',
      'Database Engineer, Environmentalist',
      'Seb is our most valuable unreachable volunteer. He loves planting trees, which we would consider a virtue if we didn’t need his database syntax. He has a thin layer of African dust on his computer and spends his days wandering around in the forests he plants and protects wondering if we are going to listen to him. Rumor has it, he is about to rework the MySQL database he designed. He volunteers with GreenStand because he has a big idea to fund tree planting by linking this system to an app for virtual (or not so virtual) farming.',
      '../../assets/images/team-members/SebastianGertner.jpg'
    ),
    new TeamMember(
      'Sam Andrews', 
      'Field Coordinator, Chicken Farmer',
      'Sam is an electrical/mechanical engineer who believes that he can have an impact on his environment by using agroforestry practices to combat extreme erosion his village. In his effort to alleviate poverty he aims to make biofuel production viable. He has created a biofuel powered egg incubator and has designed a human powered machine to crack open croton nuts. He has also planted tens of thousand of trees around his village in Tanzania, East Africa and understands what it takes to keep trees alive. At GreenStand, he is currently field testing android software.',
      '../../assets/images/team-members/SamAndrews.jpg'
    ),
    new TeamMember(
      'Tim Leach',
      'Environmental Engineer, Feasibility',
      'Tim is an entrepreneur and conservationist who has a tree swing that is so big it requires a proper harness. With extensive business experience in developing countries he is extremely good at on- the- ground logistics.  He joined the project looking for ways to make the croton nut a viable source of biofuel for his fleet of high performance safari vehicles. While he waits for thousands of his biofuel producing trees to mature, he advisesd and re-advises us on what will and won’t works in the context of extreme poverty and environment conditions. ',
      '../../assets/images/team-members/TimLeach.jpg'
    ),
    new TeamMember(
      'Alan Cole',
      'Web Developer, Musician',
      'Alan is a professional web developer and musician. He transforms lines of code and meters of music into elegance. When he is not biking around town, writing notes in a notebook, or building and repairing musical instruments, he listens to C.P.E Bach and composes in Angular, Node, Express, MongoDB, JQuery, HTML5, and CSS3. He works on Greenstand because he cares about sustainability and the planet he will leave to his children.',
      '../../assets/images/team-members/Alan-Cole.jpg'
    )
  ];

//   this put request should go in the NgOnInit() method
// comment out the other http methods there and use this to upload changes to firebase db
this.http.put('https://treetracker-24de7.firebaseio.com/team-members.json', this.teamMembers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );