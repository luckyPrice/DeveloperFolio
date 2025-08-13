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
    "문제 해결을 통해 시스템의 안정성과 효율성을 높이는 인프라 엔지니어입니다.  🚀🚀 클라우드 네이티브 기술을 기반으로 CI/CD 파이프라인을 자동화하고, 장애를 선제적으로 방지하는 탄력적인 아키텍처를 설계하고 운영한 경험이 있습니다.  🚀🚀 이 경험을 바탕으로 가장 신뢰도 높은 인프라를 구축하는 전문가로 성장하고 싶습니다."
    
  ),
  resumeLink:
    "resume.pdf", // Set to empty to hide the butto
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
  subTitle: "안정성과 효율성을 모두 고려하는 클라우드 & 데브옵스 엔지니어를 목표로 합니다.",

  skills: [
    emoji("⚡ 클라우드 기반의 안정적이고 확장 가능한 아키텍처 설계 및 구축 (AWS, GCP)"),
    emoji("⚡ Jenkins, ArgoCD 등을 활용한 CI/CD 파이프라인 자동화 및 GitOps 구현"),
    emoji("⚡ Docker, Kubernetes(EKS) 기반의 컨테이너 환경 운영 및 오케스트레이션"),
    emoji("⚡ Terraform, Ansible을 활용한 코드 기반 인프라 관리(IaC) 및 자동화"),
    emoji("⚡ Prometheus, Grafana 기반의 시스템 성능 모니터링 및 장애 분석"),
    emoji("⚡ VPC, Subnet, 보안 그룹, WAF를 활용한 다층적 네트워크 보안 설계")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fas fa-cloud" // 범용 클라우드 아이콘
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra" // 쿠버네티스 로고와 유사한 아이콘
    },
    {
      skillName: "ECS",
      fontAwesomeClassname: "fab fa-aws"
    },
    // CI/CD & IaC
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "ArgoCD",
      fontAwesomeClassname: "fas fa-sync-alt" // GitOps의 '동기화' 컨셉을 나타내는 아이콘
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "gitlab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    // Monitoring
    {
      skillName: "grafana",
      fontAwesomeClassname: "fas fa-chart-line" // 모니터링 툴에 더 적합한 아이콘
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-fire" // 프로메테우스의 '불' 로고를 상징하는 아이콘
    },
    // Languages
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code" // 키보드보다 '코드'에 더 적합한 아이콘
    },
    // Database
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database"
    }
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
    },
    {
      schoolName: "카카오테크 부트캠프 - 클라우드 네이티브 과정",
      logo: require("./assets/images/kakao.png"),
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
      progressPercentage: "100%"
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
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
  title: "주요 프로젝트",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/onthetop.png"),
      projectDesc: "On The Top(OTT) - 본 서비스는 사용자의 데스크 환경을 분석하고, 어울리는 제품을 추천 및 구매할 수 있는 AI 기반 데스크테리어 플랫폼입니다. 사용자의 참여와 상호작용을 통해 개인화된 경험을 제공합니다.",

       // 👇 (1/2) 상세 페이지로 이동하기 위한 고유 url.
      url: "on-the-top", 
      
      // 👇 (2/2) 상세 페이지에 표시될 긴 설명을 추가합니다.
      longDescription:
        "On The Top(OTT)은 사용자의 데스크 환경을 AI로 분석하여 가장 어울리는 데스크테리어 제품을 추천하고 구매까지 연결하는 서비스입니다. AWS의 다양한 서비스를 활용하여 인프라를 구축했습니다. 예를 들어, Amazon S3에 제품 이미지를 저장하고, Amazon Rekognition으로 이미지 내 객체를 분석하여 사용자 취향에 맞는 제품을 태그 기반으로 추천합니다. 사용자가 데스크 사진을 업로드하면, 이 분석 결과를 바탕으로 개인화된 추천 목록을 제공하여 높은 만족도를 이끌어냈습니다. 이 프로젝트를 통해 대용량 이미지 처리와 AI 서비스를 연동하는 아키텍처 설계 경험을 쌓을 수 있었습니다.",


      footerLink: [
        {
          name: "github",
          url: "https://github.com/100-hours-a-week/16-Hot6-wiki/wiki/Cloud-Wiki"
        },
        {
          name: "github",
          url: "https://github.com/100-hours-a-week/16-Hot6-wiki/wiki"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/til.png"),
      // projectName: "Saayahealth",
      projectDesc: "TILING - LLM 기반 작성한 TIL을 Markdown(md) 형식으로 변환하여 연동된 플랫폼(GitHub, Notion)에 자동 업로드할 수 있는 기능을 제공합니다.",

       url: "tiling-project", 
      
      // 👇 (2/2) 상세 페이지 긴 설명 추가
      longDescription:
        "TILING은 개발자들의 '오늘 배운 것(Today I Learned)' 작성 생산성을 극대화하기 위한 LLM 기반 자동화 툴입니다. 사용자가 간단한 메모나 키워드 중심으로 내용을 입력하면, LLM API(예: OpenAI GPT)를 호출하여 자연스러운 문장의 Markdown 형식으로 변환해 줍니다. 또한, GitHub API, Notion API와 연동하여 버튼 클릭 한 번으로 사용자가 지정한 레포지토리나 페이지에 TIL을 자동으로 업로드합니다. 이 과정에서 CI/CD 파이프라인을 구축하여 코드 변경 시 자동으로 테스트 및 배포가 이루어지도록 설계했으며, 보안을 위해 API 키와 같은 민감 정보는 AWS Secrets Manager를 통해 안전하게 관리했습니다.",

      footerLink: [
        {
          name: "github",
          url: "https://github.com/luckyPrice/Til_project/tree/main"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mugu.png"),
      // projectName: "Nextu",
      projectDesc: "MUGU - 집에 필요 없는 물건을 쉽게 팔거나, 단기적인 알바를 구하기 위한 사용자들에게 맞춤 서비스를 제공합니다.",

      url: "mugu-market",
      
      // 👇 (2/2) 상세 페이지 긴 설명 추가
      longDescription: 
        "MUGU는 지역 기반의 중고 거래와 단기 구인/구직을 연결하는 하이퍼로컬 플랫폼입니다. 사용자의 위치를 기반으로 주변의 거래 가능한 물품이나 아르바이트 정보를 실시간으로 보여줍니다. Docker와 Kubernetes(EKS)를 사용하여 마이크로서비스 아키텍처(MSA)로 인프라를 구축하였으며, 트래픽 급증에 대비하여 Auto Scaling을 설정해 안정적인 서비스 운영이 가능하도록 했습니다. Prometheus와 Grafana를 이용해 각 서비스의 상태를 실시간으로 모니터링하고, 장애 발생 시 슬랙으로 알림을 받아 신속하게 대응할 수 있는 시스템을 마련했습니다.",
        
      footerLink: [
       
        {
          name: "github",
          url: "https://github.com/luckyPrice/MUGU"
        },
      ]
    },
    // { 
    //   image: require("./assets/images/ems.png"),
    //   // projectName: "Nextu",
    //   projectDesc: "Peoplehub - 직원 혹은 모임에 속해있는 사람들을 관리 할 수 있는 인적자원 관리 시스템. ",
    //   footerLink: [
       
    //     {
    //       name: "github",
    //       url: "https://github.com/luckyPrice/Peoplehub"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/twitter.png"),
    //   // projectName: "Nextu",
    //   projectDesc: "react, firebase를 사용하여 실제 sns project처럼 친구 추가, 팔로우등 커뮤니케이션 할 수 있는 기능을 가지고 있는 애플리케이션 구현",
    //   footerLink: [
       
    //     {
    //       name: "github",
    //       url: "https://github.com/luckyPrice/twitter"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/cicd.png"),
    //   // projectName: "Nextu",
    //   projectDesc: "Jenkins, Kubernets, Ansible을 이용한 CI/CD 프로젝트",
    //   footerLink: [
    //    {
    //       name: "blog",
    //       url: "https://github.com/luckyPrice/CICD-registration-app"
    //     },
    //     {
    //       name: "github",
    //       url: "https://github.com/luckyPrice/CICD-registration-app"
    //     },
    //   ]
    // },
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
      title: "AWS Certified Solutions Architect - Associate",
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
  title: "블로그 글",
  subtitle:
    "프로젝트를 진행하며 발생했던일, 공부한 것들을 기술했습니다.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://velog.io/@luckyprice1103/%EC%8B%A4%EC%9A%B4%EC%98%81-Blue-Green-%EB%B0%B0%ED%8F%AC-%ED%9B%84-%EC%95%88%EC%A0%84%ED%95%9C-Docker-%EC%8A%AC%EB%A1%AF-%EC%A0%95%EB%A6%AC-%EC%9E%90%EB%8F%99%ED%99%94-GitHub-Actions-GCP",
      title: "Docker 슬롯 정리 자동화 (GitHub Actions + GCP + AWS)",
      description:
        "현재 Nginx가 바라보는 Docker 컨테이너만 남기고, 나머지는 자동 정리하는 GitHub Actions 워크플로우를 만들었습니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/GCP-MIG-%EA%B8%B0%EB%B0%98-Blue-Green-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-%EA%B5%AC%ED%98%84%EA%B8%B0-with-Docker-GitHub-Actions",
      title: "GCP MIG 기반 Blue-Green 배포 자동화 구현기 (with Docker & GitHub Actions)",
      description:
        "클라우드 환경에서서의 Managed Instance Group (MIG) 환경에서 Blue-Green 배포 전략을 적용하고, GitHub Actions로 CI/CD를 자동화한 전체 구현 과정을 정리합니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/AWS-Secrets-Manager-External-Secrets-Operator-Argo-CD%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EC%8B%9C%ED%81%AC%EB%A6%BF-%EB%B0%8F-%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%A3%BC%EC%9E%85-%EC%83%81%EC%84%B8-%EB%AC%B8%EC%84%9C",
      title: "AWS Secrets Manager, External Secrets Operator, Argo CD를 활용한 애플리케이션 시크릿 및 환경 변수 주입",
      description:
        "AWS Secrets Manager + External Secrets Operator 방식은 Kubernetes와 GitOps의 철학에 완벽하게 부합하며, 런타임 Secret의 보안, 자동화, 동기화 측면에서 훨씬 강력하고 안정적인 솔루션을 제공합니다"
    },
    {
      url: "https://velog.io/@luckyprice1103/%EB%8C%80%EA%B7%9C%EB%AA%A8-%EC%B1%84%ED%8C%85-%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC-%EC%9C%84%ED%95%9C-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%84%A4%EA%B3%84-CDN-MongoDB-Redis",
      title: "대규모 채팅 서비스를 위한 클라우드 아키텍처 설계- CDN, MongoDB, Redis",
      description:
        "대규모 트래픽을 안정적으로 처리하는 것이 목적인 과부하 테스트 대회회에서 실시간 채팅 서비스의 클라우드 인프라 아키텍처를 기술 중심으로 설계했습니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/EKS-%EA%B5%AC%EB%B2%84%EC%A0%84-ExtendedSupport-%EC%9A%94%EA%B8%88%EC%9C%BC%EB%A1%9C-6%EB%B0%B0-%ED%8F%AD%ED%83%84-%EB%A7%9E%EC%9D%80-%ED%9B%84%EA%B8%B0-%ED%8A%B8%EB%9F%AC%EB%B8%94%EC%8A%88%ED%8C%85-%EC%A0%95%EB%A6%AC",
      title: "[트러블슈팅]EKS 구버전 Extended Support 요금으로 6배 폭탄 맞은 후기",
      description:
        "클러스터가 Standard Support(0.10 $/h) → Extended Support(0.60 $/h) 로 넘어가며 6배 청구되었던 문제를 분석해보았습니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/series/AWS-3-Tier-Architecture-%EA%B5%AC%EC%B6%95",
      title: "3 Tier Architecture 구축",
      description:
        "AWS 3 Tier Architecture을 직접 구축해보고 분석해보았습니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/series/GitOps-%EA%B8%B0%EB%B0%98-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
      title: "쿠베네티스 프로젝트- GitOps 기반 배포 자동화",
      description:
        "쿠베네티스 프로젝트 GitOps 기반 배포 자동화를 진행한 과정을 기술합니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/%EB%A9%80%ED%8B%B0%EB%85%B8%EB%93%9C-Kubernetes-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0-%EA%B5%AC%EC%B6%95",
      title: "멀티노드 Kubernetes 클러스터 구축.",
      description:
        "멀티노드 Kubernetes 클러스터 구축."
    },
    {
      url: "https://velog.io/@luckyprice1103/%EB%A9%80%ED%8B%B0-%EB%85%B8%EB%93%9C-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EC%97%90%EC%84%9C-Prometheus-Grafana-%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81-%EA%B5%AC%EC%B6%95",
      title: "멀티 노드 클러스터에서 Prometheus + Grafana 모니터링 구축",
      description:
        "멀티 노드 클러스터에서 Prometheus + Grafana 모니터링 구축"
    },
    {
      url: "https://velog.io/@luckyprice1103/%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%EC%84%9C%EB%B9%84%EC%8A%A4AWS%EC%97%90%EC%84%9C%EC%9D%98-%EB%B3%B4%EC%95%88-%EB%B0%8F-%EC%95%94%ED%98%B8%ED%99%941",
      title: "AWS에서 암호 및 보안 서비스",
      description:
        "AWS 클라우드를 안전하게 사용하게 만들어주는 서비스들을 알아보자"
    },
    {
      url: "https://velog.io/@luckyprice1103/series/Terraform",
      title: "Terraform 이란?",
      description:
        "깃허브, IBM, slack, atlassian, pinterest, 쿠팡, 삼성, LG... 셀수 없는 기업들이 테라폼을 쓰고 있습니다다."
    },
    {
      url: "https://velog.io/@luckyprice1103/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%EB%B3%B4%EC%95%88",
      title: "네트워크 보안.",
      description:
        "지금은 제로 트러스트 세대, 시스템 엔지니어라면 알고 있어야 할 네트워크 보안 기본 개념을 공부해보았습니다."
    },
    {
      url: "https://velog.io/@luckyprice1103/series/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%ED%81%B4%EB%A1%A0-%EB%B0%B0%ED%8F%AC",
      title: "넷플릭스 앱을 devsecops를 구축하여 배포",
      description:
        "aws, docker, argocd, kubernetes, jenkins, prometheus, grafana, sonarqube, trivy"
    },
    {
      url: "https://velog.io/@luckyprice1103/%EC%A2%8B%EC%9D%80-dockerfile-%EB%A7%8C%EB%93%9C%EB%8A%94-%EB%B0%A9%EB%B2%95",
      title: "좋은 도커 파일을 만드는 방법",
      description:
        "Dockerfile에는 일반적으로 서버에서 애플리케이션을 실행하는 데 사용하는 단계와 유사한 단계가 있습니다."
    },
    // {
    //   url: "https://velog.io/@luckyprice1103/%EC%9D%B4%EB%AA%A8%EC%8A%A4-%EB%B2%95",
    //   title: "이모스 알고리즘이란...?",
    //   description:
    //     "이모스법이란, 일본의 한 대학원생이 만들어 낸 것으로, 누적 합 알고리즘을 다차원 및 다차수로 확장한 것이다."
    // },
    {
      url: "https://velog.io/@luckyprice1103/%EB%8F%84%EC%BB%A4Docker-%EA%B0%9D%EC%B2%B4%EB%93%A4%EA%B3%BC-%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9-%ED%95%98%EB%8A%94%EB%B2%95",
      title: "도커(Docker) 객체들과 상호작용 하는법",
      description:
        "Docker를 사용하여 컨테이너, 컨테이너 이미지, 볼륨 및 네트워크와 상호 작용하는 방법을 알아봅니다다."
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
