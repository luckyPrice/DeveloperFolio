/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AN SANGWOON",
  title: "제 이름은 안상운 입니다.",
  subTitle: emoji(
    // "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
    "누구보다 열심히 배우고자 하는 마음을 가진 엔지니어입니다. 🚀시스템 및 클라우드 아키텍처에 대한 깊은 이해를 바탕으로 다양한 환경에서 인프라를 구축하고 운영한 경험이 있습니다. AWS 클라우드에서의 풍부한 경험을 보유하고 있으며, 효율적인 시스템 설계와 자동화를 통해 안정적인 서비스를 제공하는 클라우드 및 시스템 엔지니어로 성장하고자 합니다!"
  ),
  resumeLink:
    "resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/luckyPrice",
  naver: "aws116@naver.com",
  gmail: "sangwoon991103@gmail.com",
  blog: "https://velog.io/@luckyprice1103/posts",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "기술 스택",
  subTitle: "시스템 엔지니어, 클라우드 엔지니어어, 데브옵스 엔지니어가 되고 싶습니다.",
  skills: [
    emoji("⚡ 클라우드 기반 시스템 구축 및 운영 (AWS, Azure)"),
    emoji("⚡ 자동화 및 DevOps (CI/CD, IaC, Kubernetes, Terraform, Ansible)"),
    emoji("⚡ 네트워크 및 보안 구성 (VPC, VPN, 방화벽, IAM)"),
    emoji("⚡ 시스템 모니터링 및 로깅 (CloudWatch, Prometheus, grafana)"),
    emoji("⚡ 스토리지 및 데이터 관리 (S3, EFS, FSx, RDS, DynamoDB)"),
    emoji("⚡ 리눅스 서버 운영 및 최적화"),
    emoji("⚡ 컨테이너, 오케스트레이션 (Docker, Kubernetes, EKS)"),
    emoji("⚡ 애플리케이션 현대화 및 마이크로서비스 전환을 통한 클라우드 최적화")

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "node",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kotlin",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "ArgoCD",
      fontAwesomeClassname: "fas fa-keyboard"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-keyboard"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud/Infra",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/netflix.png"),
      // projectName: "Saayahealth",
      projectDesc: "Typescript로 Netflix 클론 애플리케이션제작. Docker 컨테이너로 배포하고 이를 Kubernetes 클러스터에 배포하기 위해 Jenkins를 활용한 안전한 CI/CD 파이프라인을 구축. SonarQube, Trivy, Prometheus, Grafana, ArgoCD, Helm 사용",
      footerLink: [
        {
          name: "blog",
          url: "https://velog.io/@luckyprice1103/Netflix%EC%95%B1-%EC%BF%A0%EB%B2%84%EB%84%A4%ED%8B%B0%EC%8A%A4%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-aws-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-CICD-%ED%8C%8C%EC%9D%B4%ED%94%84%EB%9D%BC%EC%9D%B8-%EA%B5%AC%EC%B6%95"
        },
        {
          name: "github",
          url: "https://github.com/luckyPrice/Netflix"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/capston.png"),
      // projectName: "Nextu",
      projectDesc: "자바 스프링 부트와 react를 사용하여 만든 풀 스택 프로젝트. mysql을 aws의 rds로 마이그레이션후 aws ec2에서 배포. elastic load balncer와 asg를 사용하여 가용성 향상. cloud formation을 사용하여 로딩 시간 감소",
      footerLink: [
       
        {
          name: "Backend",
          url: "https://github.com/luckyPrice/online-e-commerce-marketplace-project-backend"
        },
        {
          name: "Frontend",
          url: "https://github.com/luckyPrice/online-e-commerce-marketplace-project-front-end"
        }
      ]
    },
    {
      image: require("./assets/images/twitter.png"),
      // projectName: "Nextu",
      projectDesc: "react, firebase를 사용하여 실제 sns project처럼 친구 추가, 팔로우등 커뮤니케이션 할 수 있는 기능을 가지고 있는 애플리케이션 구현",
      footerLink: [
       
        {
          name: "github",
          url: "https://github.com/luckyPrice/twitter"
        }
      ]
    },
    { 
      image: require("./assets/images/ems.png"),
      // projectName: "Nextu",
      projectDesc: "React & Node로 직원 관리 풀스택 구현. s3에서 정적파일을 저장하고 cloudfront를 통해 로드. 요청이 있을때 lambda함수를 호출해서 postgres rds에서 데이터를 저장, 처리, 반환 함. ",
      footerLink: [
       
        {
          name: "github",
          url: "https://github.com/luckyPrice/employee_management_system"
        }
      ]
    },
    {
      image: require("./assets/images/cicd.png"),
      // projectName: "Nextu",
      projectDesc: "Jenkins, Kubernets, Ansible을 이용한 CI/CD 프로젝트",
      footerLink: [
       {
          name: "blog",
          url: "https://github.com/luckyPrice/CICD-registration-app"
        },
        {
          name: "github",
          url: "https://github.com/luckyPrice/CICD-registration-app"
        },
      ]
    },
    // {
    //   image: require("./assets/images/twitter.png"),
    //   // projectName: "Nextu",
    //   projectDesc: "",
    //   footerLink: [
       
    //     {
    //       name: "github",
    //       url: "https://github.com/luckyPrice/twitter"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("자격증 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "AWS 기술의 기반으로 안전하고 강력한 애플리케이션을 설계 및 배포하는 방법에 대한 지식을 효과적으로 입증하고, 고객 요구 사항을 기반으로 아키텍처 설계 원칙을 사용하여 솔루션을 정의, 또한 모범 사례를 기반으로 프로젝트 수명 주기 전반에 걸쳐 조직에 구현 지침을 제공할 수 있다는 능력 검증을 할 수 있습니다.",
      image: require("./assets/images/saa-image.png"),
      imageAlt: "saa Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "정보처리기사",
      subtitle:
        " 하드웨어와 소프트웨어에 대한 전문적인 지식을 가지고 있습니다. 정보시스템의 생명주기 전반에 걸친 프로젝트 업무를 수행하고 계획수립, 분석, 설계, 구현, 시험, 운영, 유지보수 등의 업무를 수행할 수 있습니다.",
      image: require("./assets/images/data.png"),
      imageAlt: "koreadata Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "sqld",
      subtitle: "데이터모델링에 기본 지식을 바탕으로 SQL 작성, 성능 최적화 등 데이터베이스 개체 설계 및 구현 등에 대한 전문지식 및 실무적 수행 능력 가지고 있습니다.",
      image: require("./assets/images/sqld.png"),
      imageAlt: "sqld Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },

    {
      title: "OPIc IH",
      subtitle: "개인에게 익숙하지 않거나 예측하지 못한 복잡한 상황을 만날 때, 대부분의 상황에서 사건을 설명하고 문제를 효과적으로 해결할 수 있는 영어어회화 등급. 발화량이 많고, 다양한 어휘를 사용할 수 있습니다.",
      image: require("./assets/images/opic.png"),
      imageAlt: "OPIc Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "나의 블로그 글",
  subtitle:
    "저의 블로그를 방문해주세요....!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://velog.io/@luckyprice1103/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%84%9C%EB%B9%84%EC%8A%A4AWS%EC%97%90%EC%84%9C%EC%9D%98-%EB%B3%B4%EC%95%88-%EB%B0%8F-%EC%95%94%ED%98%B8%ED%99%941",
      title: "AWS에서 암호 및 보안 서비스",
      description:
        "AWS 클라우드를 안전하게 사용하게 만들어주는 서비스들을 알아보자"
    },
    {
      url: "https://velog.io/@luckyprice1103/series/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8%EB%AC%B8%EC%A0%9C",
      title: "코딩테스트를 풀어보자.",
      description:
        "코딩테스트는 언제어디서든 준비가 되어있는 마음으로....."
    },
    {
      url: "https://velog.io/@luckyprice1103/series/python",
      title: "자료구조, 알고리즘즘",
      description:
        "알고있거나 알면 좋을 자료구조와 알고리즘을 알아보자"
    },
    {
      url: "https://velog.io/@luckyprice1103/series/Terraform",
      title: "Terraform 이란?",
      description:
        "깃허브, IBM, slack, atlassian, pinterest, 쿠팡, 삼성, LG... 셀수 없는 기업들이 테라폼을 쓰고 있다."
    },
    {
      url: "https://velog.io/@luckyprice1103/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EB%B3%B4%EC%95%88",
      title: "네트워크 보안.",
      description:
        "지금은 제로 트러스트 세대, 시스템 엔지니어라면 알고 있어야 할 네트워크 보안 기본 개념."
    },
    {
      url: "https://velog.io/@luckyprice1103/series/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%ED%81%B4%EB%A1%A0-%EB%B0%B0%ED%8F%AC",
      title: "넷플릭스 앱을 devsecops를 구축하여 배포해보자....!",
      description:
        "aws, docker, argocd, kubernetes, jenkins, prometheus, grafana, sonarqube, trivy"
    },
    {
      url: "https://velog.io/@luckyprice1103/%EC%A2%8B%EC%9D%80-dockerfile-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B0%A9%EB%B2%95",
      title: "좋은 도커 파일을 만드는 방법",
      description:
        "Dockerfile에는 일반적으로 서버에서 애플리케이션을 실행하는 데 사용하는 단계와 유사한 단계가 있다....!"
    },
    {
      url: "https://velog.io/@luckyprice1103/%EC%9D%B4%EB%AA%A8%EC%8A%A4-%EB%B2%95",
      title: "이모스 알고리즘이란...?",
      description:
        "이모스법이란, 일본의 한 대학원생이 만들어 낸 것으로, 누적 합 알고리즘을 다차원 및 다차수로 확장한 것이다."
    },
    {
      url: "https://velog.io/@luckyprice1103/%EB%8F%84%EC%BB%A4Docker-%EA%B0%9D%EC%B2%B4%EB%93%A4%EA%B3%BC-%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9-%ED%95%98%EB%8A%94%EB%B2%95",
      title: "도커(Docker) 객체들과 상호작용 하는법",
      description:
        "Docker를 사용하여 컨테이너, 컨테이너 이미지, 볼륨 및 네트워크와 상호 작용하는 방법을 알아보자."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "010-4153-2941",
  email_address: "asw116@naver.com"
};

// Twitter Sections

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
