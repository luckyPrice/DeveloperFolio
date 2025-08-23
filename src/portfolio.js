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
      title: "On The Top(OTT)",
      projectName: "On The Top",
      projectDesc: "AI를 활용한 개인 맞춤형 데스크테리어 추천 서비스",
      url: "on-the-top-portfolio", // 상세 페이지 URL
      image: require("./assets/images/onthetop.png"), // 목록용 썸네일 이미지
      
      content: [
        // {
        //   type: 'subtitle',
        //   value: "On The Top"
        // },
        
        {
          type: 'text',
          value: "On The Top은 사용자의 현재 책상 사진을 기반으로 추가하면 좋을 데스크테리어 아이템을 추천해 주고, 해당 사진을 기반으로 추천된 아이템이 적용된 모습을 AI를 통해 생성하여 제공하는 서비스입니다. 저는 클라우드 엔지니어로 프로젝트에 참여했습니다."
        },
        {
          type: 'image',
          value: require("./assets/images/onthetop.png") // 대표 이미지
        },
        //단계별 아키텍처 설계 및 구현
        {
            type: 'subtitle',
            value: '단계별 아키텍처 설계'
        },
        {
            type: 'heading',
            value: '빅뱅 배포'
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-1_bigbang_deploy.drawio.png")
        },
        {
            type: 'text',
            value: '단일 인스턴스 배포에서 시작하여 CI/CD, 3 Tier, Docker, Kubernetes 순으로 아키텍처를 점진적으로 발전시켰습니다. 각 단계의 전환을 통해 HA 확보, 수평 확장, 무중단 배포, 유연성 확보 등 각 아키텍처의 장점을 명확히 체득하고 실제 구현 경험을 쌓았습니다.'
        },
        {
            type: 'heading',
            value: '3 tier architecture'
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-3_Tier_Architecture.drawio.png")
        },
        {
            type: 'text',
            value: '이 아키텍처는 전통적인 3-Tier 구조에 기반하여 구성하였습니다. 서비스의 안정성과 확장성을 확보하기 위해 프레젠테이션, 애플리케이션, 데이터 계층의 역할을 명확히 분리한 3-Tier 아키텍처를 설계하고 구축했습니다. 운영 환경에서는 GCP의 Managed Instance Group과 이중화된 MySQL 데이터베이스, HTTPS Load Balancer를 활용하여 고가용성을 확보했으며, 정적 콘텐츠의 전송 최적화를 위해 AWS S3와 CloudFront를 연동하는 멀티 클라우드 환경을 구현했습니다. 또한, GitHub Actions를 도입하여 빌드 자동화 파이프라인을 구축했으며, 향후 Docker와 Kubernetes 기반의 클라우드 네이티브 환경으로 전환하기 위한 기반을 마련하는 동시에 Prometheus, Grafana를 이용한 모니터링 시스템과 VPN을 활용한 보안 체계를 구축하여 안정적인 서비스 운영을 도모했습니다.'
        },
        {
            type: 'heading',
            value: 'Docker'
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-4_ Docker.drawio.png")
        },
        {
            type: 'text',
            value: '기존 3-Tier 아키텍처에서 발생했던 서버 환경의 불일치성과 의존성 관리의 어려움을 해결하고자 Docker를 도입하여 개발, 테스트, 운영 환경을 코드로 관리하고 격리함으로써 환경의 일관성을 확보했습니다. 특히, Docker Compose를 활용하여 여러 컨테이너 애플리케이션의 실행을 자동화하고 관리 복잡성을 크게 줄였습니다. 더 나아가, 무중단 배포를 실현하기 위해 Nginx의 리버스 프록시 기능을 활용한 쉘 스크립트를 직접 작성하여 Blue-Green 배포 환경을 구축하였으며, 배포 과정에서 문제가 발생할 경우 즉시 이전 버전으로 서비스를 되돌릴 수 있는 롤백(Rollback) 기능까지 구현하여 서비스의 안정성과 가용성을 극대화했습니다.'
        },
        {
            type: 'heading',
            value: 'EKS'
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-6_EKS.drawio.png")
        },
        {
            type: 'text',
            value: '급변하는 비즈니스 요구사항과 2주 안에 새로운 Redis, CNN 서버 스택을 배포해야 하는 과제에 대응하기 위해, 기존의 수동적인 인프라 구축 방식에서 벗어나 AWS EKS 기반의 컨테이너 오케스트레이션 환경을 설계하고 도입했습니다. 관리형 서비스인 EKS를 채택하여 인프라 관리의 복잡성을 크게 줄이고 개발팀이 애플리케이션 설정에만 집중할 수 있는 환경을 조성했으며, AWS의 통합된 생태계를 활용하여 플랫폼의 안정성과 확장성을 확보했습니다. 특히 컨테이너 자동 복구(Self-healing) 및 오토 스케일링(Auto-scaling) 기능을 활용해 장애 발생 시 수동 개입을 최소화하고, 트래픽에 따라 리소스를 탄력적으로 운영하여 비용 효율성까지 극대화했습니다. 나아가 GitOps 워크플로우를 실현하고자 ArgoCD를 도입하여 Git 저장소를 기준으로 배포를 자동화했고, Namespace를 활용해 개발(dev) 환경과 운영(prod) 환경을 논리적으로 완벽히 분리했습니다. 또한, External Secrets Operator(ESO)를 연동하여 각 환경에 필요한 인증 정보들을 AWS Secrets Manager에서 안전하게 동기화하도록 구성함으로써, 빠르고 유연한 배포 파이프라인과 높은 수준의 보안 체계를 동시에 구축했습니다.'
        },
        {
            type: 'heading',
            value: 'EKS-Redis'
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-6_Redis.drawio.png")
        },
        {
            type: 'text',
            value: '자동화된 환경 속에서 시스템의 근본적인 한계도 발견할 수 있었습니다. 예를 들어, AI 서버의 OOM 장애가 전체 서비스 중단으로 이어지는 구조적 결함을 분석했고, 그 원인이 동기식 구조의 강한 결합에 있음을 확인했습니다. 단순히 서버 사양을 높이는 것이 아닌, 아키텍처 자체를 개선하는 방향을 선택했습니다. Redis 기반의 메시지 큐를 도입해 비동기 구조로 재설계함으로써, 장애가 다른 시스템으로 전파되지 않도록 하고 데이터 무결성을 확보하는 탄력적인 시스템을 구축할 수 있었습니다.'
        },

        {
          type: 'subtitle',
          value: "시연영상"
        },
        {
          type: 'image',
          value: require("./assets/images/video/ott.gif") // 대표 이미지
        },
        {
          type: 'text',
          value: "https://drive.google.com/file/d/1BzidEkesLumfyolAEDONOpuWSnwswJ7O/view"
        },
        {
            type: "subtitle",
            value: "멀티 클라우드 전략 및 마이그레이션"
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-Terraform, Ansible-1.drawio (1).png") // 대표 이미지
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-Terraform, Ansible-2.drawio (2).png") // 대표 이미지
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-Terraform. Ansible-3.drawio (1).png") // 대표 이미지
        },
        {
            type: "heading",
            value: "GCP 크레딧 이용 클라우드 비용 최적화"
        },
        {
            type: "text",
            value: "프로젝트를 시작할 때부터 멀티클라우드 환경을 전제로 인프라를 분리하는 구조를 계획했습니다. 이는 특정 클라우드 벤더에 종속되지 않고, 확장성을 확보하기 위함이었습니다. 특히, GCP 계정에 할당된 제한적인 자원을 효율적으로 사용하기 위해, 애플리케이션 구동에 필요한 대부분의 컴퓨팅 리소스를 GCP 프로젝트 단위로 분리하고 재배치할 수 있도록 설계했습니다. 이 과정에서 Terraform을 도입해 인프라를 코드로 관리(IaC)함으로써, 프로젝트별 인프라를 유연하게 생성하거나 파기할 수 있는 시스템을 구축했습니다. 이러한 아키텍처는 향후 클라우드 마이그레이션을 용이하게 하고, 운영 비용을 절감하는 데 결정적인 역할을 했습니다."
        },
        {
            type: "heading",
            value: "멀티클라우드 설계"
        },
        {
            type: "text",
            value: "한정된 100만 원 규모의 프로젝트 예산을 최적화하기 위해 전략적으로 클라우드 자원을 배분했습니다. 비용이 많이 드는 EKS(Elastic Kubernetes Service) 도입을 후반 한 달로 미루고, 그 전까지는 GCP의 무료 크레딧을 활용해 Compute Engine으로 서비스를 운영했습니다."
        },
        {
            type: "text",
            value: "이 기간 동안 AWS에는 변동성이 낮고 핵심적인 인프라 자원만 고정했습니다. 이에 따라 도메인(Route 53), 인증서(ACM), 정적 자산, 사용자 업로드 이미지, 로그 저장소(S3) 등은 AWS에 남겨두었습니다. 프로젝트 후반부에는 AWS 예산을 EKS에 집중적으로 사용하여 무중단 운영 환경을 구축할 수 있었습니다."
        },
        {
            type: "heading",
            value: "마이그레이션 설계"
        },
        {
            type: "text",
            value: "클라우드 인프라는 Terraform을 활용해 선언적으로 관리했고, Prometheus, Grafana와 같은 공통 운영 소프트웨어는 Ansible로 자동화했습니다. 애플리케이션 배포는 GitHub Actions 기반의 CI/CD 파이프라인을 구축해 자동화했습니다. 데이터베이스와 VPN 같은 민감한 요소는 수동으로 이전 작업을 진행했습니다. 특히 DB는 실시간 데이터 유입으로 인해 완벽한 무중단 이전은 어려웠지만, 이는 향후 HAProxy나 이중화 구성으로 보완 가능한 영역이라고 판단했습니다."
        },
        {
            type: "text",
            value: "핵심 리소스를 자동화 도구로 선언적으로 관리한 덕분에, 서버 이전 작업을 빠르게 완료할 수 있었습니다. 이전 과정에서 예상치 못한 오류가 발생했지만, 선언형 구성을 기반으로 신속하게 문제를 해결하고 복구할 수 있었습니다."
        },
        


        {
            type: "subtitle",
            value: "쿠버네티스 스팟 인스턴스를 활용한 비용 최적화"
        },
        {
            type: "heading",
            value: "EKS Spot 인스턴스를 활용한 비용 최적화 전략"
        },
        {
            type: "text",
            value: "개발 단계에서의 비용 최적화를 위해 EKS 클러스터의 워커 노드에 Spot 인스턴스를 활용했습니다. EKS는 관리형 서비스로 마스터 노드를 자동으로 관리해 주기 때문에, 저희는 워커 노드의 비용 효율성을 극대화하는 데 집중할 수 있었습니다. Spot 인스턴스가 중단될 가능성에 대비해, EKS 관리형 노드 그룹(Managed Node Groups) 기능을 사용했습니다. 이 기능은 노드가 갑자기 종료되어도 새로운 노드가 자동으로 생성되어 클러스터에 합류하도록 설정할 수 있어 안정성을 확보할 수 있습니다. 결과적으로, EKS의 관리형 기능을 적극 활용하여 운영 부담을 줄이는 동시에, 비용이 저렴한 Spot 인스턴스를 사용해 효율적으로 개발 환경을 운영할 수 있었습니다."
        },
        {
            type: "heading",
            value: "성과"
        },
        {
            type: "text",
            value: "Spot 인스턴스를 통해 워커 노드당 약 69%의 비용을 절감할 수 있었으며, 현재 구성(t3.medium, 1 마스터 + 3 워커) 기준으로 전체 인프라 비용의 50% 이상을 절약할 수 있었습니다. 또한 워커 노드가 추가될 때마다 각 노드당 월 기준 약 $25의 절감 효과가 누적되며, 확장에 따른 비용 부담을 안정적으로 통제할 수 있는 기반을 마련했습니다."
        },


        {
            type: "subtitle",
            value: "아키텍처 취약점 분석 및 구조적 개선"
        },
        {
            type: "heading",
            value: "보안 문제의 핵심: 공개적으로 노출된 내부 통신용 API 엔드포인트"
        },
        {
            type: "text",
            value: "이 보안 문제의 근원은 인증(Authentication) 및 인가(Authorization) 절차의 부재였습니다. AI 서버가 처리 결과를 백엔드 서버로 전송하기 위해 설계된 특정 API 엔드포인트가 인터넷에 공개적으로 노출되어 있었습니다. 이 엔드포인트는 서버 간(Server-to-Server) 통신을 위한 내부용이었음에도 불구하고, 요청을 보내는 클라이언트의 신원을 확인하는 어떠한 메커니즘도 갖추고 있지 않았습니다. 결과적으로, 해당 엔드포인트의 URL을 아는 모든 클라이언트가 조작된 HTTP 요청을 보낼 수 있었고, 백엔드 서버는 이 비인가 요청을 신뢰할 수 있는 AI 서버로부터 온 정상적인 요청으로 오인하여 처리했습니다."
        },
                {
            type: "heading",
            value: "인프라 레벨 접근 제어 (클라우드 조치)"
        },
        {
            type: "text",
            value: "네트워크 및 인프라 구성을 변경하여, 인가되지 않은 트래픽이 애초에 애플리케이션에 도달하지 못하도록 원천적으로 차단하였습니다."
        },
        {
            type: "text",
            value: "• 네트워크 격리 (VPC 활용): 서버들을 외부와 논리적으로 격리된 가상 사설 클라우드(VPC) 내에 배치하고, 공개 IP가 아닌 사설(Private) IP 주소를 통해 서버 간 통신이 이루어지도록 네트워크 아키텍처를 구성합니다. 이를 통해 해당 엔드포인트를 인터넷으로부터 격리시켰습니다."
        },
        {
          type: 'image',
          value: require("./assets/images/onthetop-네트워크 격리 (VPC 활용).drawio.png") // 대표 이미지
        },
        {
            type: "text",
            value: "• 리버스 프록시 (Reverse Proxy) 설정: Nginx와 같은 리버스 프록시 서버에서 특정 엔드포인트로 들어오는 요청의 소스 IP, 헤더 값 등을 기준으로 접근 제어 규칙을 설정하여, 조건에 부합하지 않는 요청을 애플리케이션 서버에 전달하기 전에 차단합니다."
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-reverse-proxy.png") // 대표 이미지
        },
        {
            type: "text",
            value: "• 웹 방화벽 (WAF, Web Application Firewall): 애플리케이션 앞단에 WAF를 배치하여, 특정 IP 주소 대역에서의 요청만 허용(IP Whitelisting)하거나 특정 패턴의 악의적 요청을 필터링하는 규칙을 적용합니다."
        },
        {
          type: 'image',
          value: require("./assets/images/OnTheTop-waf.png") // 대표 이미지
        },

        {
            type: "heading",
            value: "애플리케이션 레벨 보안 강화 (서버 측 조치)"
        },
        {
            type: "text",
            value: "애플리케이션의 소스 코드를 수정하여, API 엔드포인트에 도달한 요청에 대해 신원을 검증하는 로직을 구현하였습니다."
        },
        {
            type: "text",
            value: `• API 키 / Secret 헤더: 사전에 협의된 고유한 키(Key) 값을 요청 헤더에 포함시켜 전송하고, 수신 측 서버는 이 키 값의 유효성을 검증하여 인가된 요청인지 판별합니다.
• JWT (JSON Web Tokens): 인증된 서버에 대해 디지털 서명된 액세스 토큰을 발급하고, 요청 시마다 이 토큰을 검증하여 요청의 무결성과 출처를 확인합니다.
• mTLS (상호 TLS 인증): 클라이언트와 서버가 각각 자신의 고유한 TLS 인증서를 사용하여 서로의 신원을 암호학적으로 검증하는 방식으로, 강력한 양방향 인증을 구현합니다.`
        },
        {
            type: "heading",
            value: "결론"
        },
        {
            type: "text",
            value: "이 보안 문제를 통해 클라우드 환경에서 내부 통신용으로 설계된 API라 할지라도 명시적인 인증 및 인가 절차가 없다면 심각한 보안 취약점이 될 수 있다는것을 알게되었습니다. 따라서 모든 API 엔드포인트는 신뢰 경계(Trust Boundary)를 명확히 설정하고, 통신 주체에 대한 엄격한 신원 검증 메커니즘을 애플리케이션과 인프라 모든 계층에 걸쳐 적용하는 것이 중요하다는 것을 알게되었습니다.."
        },


        {
          type: 'subtitle',
          value: 'WHY? 문서 작성: 모든 기술 선택에 이유를 담다'
        },
        {
          type: 'text',
          value: "기존 프로젝트에서 ‘왜?’에 대한 고민 없이 기술을 도입했던 경험을 통해, 이번에는 모든 선택에 의식적으로 질문을 던지는 ‘WHY? 문서’를 기획했습니다. 클라우드 선택부터 CI/CD 구축, Docker 도입까지 모든 결정의 이유를 문서화했고, 이는 팀원들과의 효율적이고 정확한 의사소통의 기반이 되었습니다. 또한, 기술 격차를 해소하고 기존에 알던 기술도 더 깊이 탐구하는 계기가 되었습니다."
        },
        {
            type: 'subtitle',
            value: '프로젝트 성과 요약'
        },
        {
            type: 'text',
            value: `• WHY 문서 기반 기술 선택 문서화 → 팀 내 의사소통 및 기술 설계 기준 정립
• Kubeadm + Spot 기반 비용 최적화 구조 도입 → 워커 노드당 비용 약 69% 절감
• GCP 프로젝트 간 전체 이관 구조 설계 및 하루 내 서버 무중단 이전 완료
• 내부 보안 취약점 실험 및 구조 개선 제안 → 아키텍처 설계 관점에서의 보안 인식 강화
• 총 3회 이상 기술 발표 및 문서화 → 팀 내 공유 문화 및 설계 기준 확립에 기여`
        }
      ],

      footerLink: [
        {
          name: "github",
          url: "https://github.com/100-hours-a-week/16-Hot6-wiki/wiki"
        }
        //  you can add extra buttons here.
      ]
    },


    {
      projectName: "TILING",
      projectDesc: "LLM 기반 TIL을 Markdown으로 변환하여 여러 플랫폼에 자동 업로드하는 서비스",
      url: "tiling-portfolio", // 상세 페이지 URL
      image: require("./assets/images/onthetop.png"), // 목록용 썸네일 이미지
      
      "content": [
          {
              "type": "subtitle",
              "value": "TILING"
          },
          {
              // TILING 서비스의 로고나 메인 아이디어(TIL을 한번에 여러 플랫폼에 올리는)를 나타내는 이미지
              "type": "image",
              "value": require("./assets/images/tiling_4.png") 
          },
          {
              "type": "subtitle",
              "value": "문제 상황 및 아이디어"
          },
          {
              "type": "text",
              "value": "많은 개발자와 학생들이 Notion, GitHub, Velog 등 여러 플랫폼에 TIL(Today I Learned)을 올리면서 반복적인 업로드 과정에 불편함을 겪습니다. 이러한 문제를 해결하기 위해, 하나의 플랫폼에서 TIL을 작성하고 관리할 수 있는 서비스 'TILing'을 제작했습니다. TILing은 작성한 TIL을 Markdown(md) 형식으로 변환하여 연동된 플랫폼(GitHub, Notion)에 자동으로 업로드하는 기능을 제공하여 사용자의 학습 기록 경험을 혁신하는 것을 목표로 합니다."
          },
          {
              "type": "subtitle",
              "value": "주요 기능"
          },
          {
              // TILING 서비스의 로고나 메인 아이디어(TIL을 한번에 여러 플랫폼에 올리는)를 나타내는 이미지
              "type": "image",
              "value": require("./assets/images/tiling_1.png") 
          },
          {
              // TILING 서비스의 로고나 메인 아이디어(TIL을 한번에 여러 플랫폼에 올리는)를 나타내는 이미지
              "type": "image",
              "value": require("./assets/images/tiling_2.png")
          },
          {
              "type": "text",
              "value": "• TIL 자동 변환 및 업로드: 웹 에디터에서 작성한 TIL을 Markdown으로 변환 후 GitHub, Notion 등에 자동 배포합니다.\n• 템플릿 제공: 체계적인 학습 정리를 위한 TIL 작성 템플릿을 지원합니다.\n• LLM 기반 자동 정리: 입력한 학습 내용을 LLM이 분석하여 정돈된 목차와 구조화된 학습 기록을 생성합니다.\n• 사용자 맞춤 설정: 연동할 플랫폼을 직접 선택하고 업로드 방식을 설정할 수 있습니다.\n• 안정적인 비동기 처리: 외부 API 연동과 같이 시간이 오래 걸리는 작업을 비동기 큐로 분리하여 서비스 안정성을 확보했습니다."
          },
          {
              "type": "subtitle",
              "value": "클라우드 아키텍처"
          },
          {
              "type": "image",
              "value": require("./assets/images/tiling_4.png")
          },
          {
              "type": "text",
              "value": "배포 안정성과 속도를 높이기 위해 GitOps 워크플로우를 도입했습니다. 개발자가 Git에 코드를 푸시하면, GitHub Actions가 이를 감지하여 자동으로 Docker 이미지를 빌드하고 Amazon ECR(Elastic Container Registry)에 푸시합니다. 이후 ArgoCD가 Git 저장소의 Manifest 파일 변경을 감지하여 운영 환경의 쿠버네티스 클러스터와 상태를 동기화합니다. 이 GitOps 기반의 배포 파이프라인을 통해 모든 배포 과정이 Git 기록으로 관리되어 추적 및 롤백이 용이해졌으며, 수동 배포로 인한 실수를 원천적으로 차단하여 배포의 신뢰성을 극대화했습니다."
          },
          {
              //"백엔드 서버, 비동기 작업 큐, 외부 API의 관계를 나타내는 전체 아키텍처 다이어그램",
              "type": "image",
              "value": require("./assets/images/tiling_3.png")
          },
          {
              "type": "text",
              "value": "서비스의 안정성과 확장성을 확보하기 위해 AWS EKS 기반의 컨테이너 오케스트레이션 환경을 구축했습니다. 특히, 외부 플랫폼 API 호출과 같이 시간이 오래 걸리거나 실패 가능성이 있는 작업들을 **비동기 작업 큐(Message Queue)로 분리**하여 메인 API 서버의 부하를 최소화했습니다. 이 구조 덕분에 외부 서비스의 장애가 전체 서비스로 전파되는 것을 막고, 사용자에게는 빠른 응답을 제공할 수 있었습니다. 또한 Application Load Balancer(ALB)와 EKS의 오토스케일링 기능을 연동하여 트래픽 변화에 탄력적으로 대응하는 고가용성 환경을 설계했습니다."
          },
          
          // {
          //     "type": "subtitle",
          //     "value": "배포 과정"
          // },
          // {
          //     //"Git Push부터 ArgoCD를 통해 쿠버네티스에 배포되기까지의 GitOps 플로우차트",
          //     "type": "image",
          //     "value": require("./assets/images/tiling_4.png")
          // },
          {
              "type": "subtitle",
              "value": "CI/CD"
          },
          {
              "comment": "GitHub Actions의 워크플로우(빌드, 테스트, 배포 단계)를 보여주는 이미지",
              "type": "image",
              "value": require("./assets/images/tiling_5.png")
          },
          {
              "type": "text",
              "value": "Jenkins를 활용하여 코드 통합부터 배포까지의 전 과정을 자동화하는 CI/CD 파이프라인을 구축했습니다. 코드 푸시 시 자동으로 정적 코드 분석, 유닛 테스트, 통합 테스트를 실행하여 코드 품질을 보장(CI)하고, 테스트를 통과한 코드만 컨테이너 이미지로 빌드하여 레지스트리에 등록합니다. 이후 개발, 스테이징, 운영 환경별 브랜치 전략과 연계하여 각 환경에 자동으로 배포(CD)되도록 구성했습니다. 이를 통해 개발자는 코드 작성에만 집중할 수 있게 되었고, 리드 타임을 획기적으로 단축하여 빠르고 안정적인 서비스 업데이트가 가능해졌습니다."
          },
          {
              "type": "text",
              "value": "개발자가 브랜치를 dev 브랜치에 Pull Request(PR)를 생성하면 Github Webhook이 작동하여 Jenkins에서 gradle과 SonarQube를 활용한 브랜치 테스트가 수행됩니다. 이 테스트 결과에 따라 Github에 커밋 상태가 업데이트되고, 이후 PR이 merge되어 dev 브랜치에 코드가 push되면 Jenkins가 다시 동작하여 dev 브랜치 테스트를 수행하고, 성공하면 Docker 이미지가 생성되어 Dockerhub에 push됩니다. 이후 GitOps 저장소를 checkout하여 업데이트하고 다시 push하며, ArgoCD는 GitOps 저장소를 주기적으로 polling하여 변경 사항을 감지하면 자동으로 dev namespace의 Kubernetes 클러스터에 배포를 수행하고 Slack에 알림을 보냅니다. 운영(prod) 배포는 수동 승인 과정을 통해 진행되며, 승인되면 prod namespace의 Kubernetes 클러스터에 Docker 이미지가 pull되어 배포가 완료됩니다."
          },
          // {
          //     "type": "subtitle",
          //     "value": "백엔드 & 프런트엔드 인프라"
          // },
          // {
          //     "comment": "백엔드(EKS API 서버, Worker)와 프런트엔드(S3, CloudFront)의 구조를 분리하여 보여주는 다이어그램",
          //     "type": "image",
          //     "value": require("./assets/images/tiling_4.png")
          // },
          // {
          //     "type": "text",
          //     "value": "사용자 경험과 운영 효율성을 최적화하기 위해 백엔드와 프런트엔드의 인프라를 분리하여 설계했습니다. 프런트엔드 애플리케이션은 정적 파일로 빌드하여 AWS S3에 저장하고, 전 세계 사용자에게 빠른 속도로 콘텐츠를 제공하기 위해 Amazon CloudFront(CDN)를 통해 배포했습니다. 백엔드 시스템은 EKS 클러스터 위에서 사용자 요청을 처리하는 API 서버와, 작업 큐의 메시지를 처리하는 백그라운드 워커(Worker)를 분리하여 운영했습니다. 이 구조는 각 컴포넌트의 역할을 명확히 하고, 필요에 따라 독립적으로 확장할 수 있는 기반이 되었습니다."
          // },
          // {
          //     "type": "subtitle",
          //     "value": "기술 스택"
          // },
          // {
          //     "comment": "사용된 기술 스택(AWS, Docker, K8s, Git, ArgoCD, BullMQ 등)의 로고를 모아놓은 이미지",
          //     "type": "image",
          //     "value": require("./assets/images/tiling_4.png")
          // },
          // {
          //     "type": "text",
          //     "value": "클라우드 네이티브 환경에 최적화된 기술 스택을 선택했습니다. 인프라는 코드로 관리하기 위해 Terraform을 도입하여 재사용성과 이식성을 높였고, Docker와 Kubernetes(EKS)를 통해 안정적인 서비스 운영 환경의 기반을 다졌습니다. 또한, Prometheus와 Grafana를 이용해 컨테이너 및 애플리케이션의 상태를 실시간으로 모니터링하고, 임계치 기반의 알림 시스템을 구축하여 장애 발생 시 신속하게 대응할 수 있는 관측 가능성(Observability)을 확보했습니다."
          // },
          // {
          //     "type": "subtitle",
          //     "value": "구현 화면"
          // },
          // {
          //     "comment": "실제 TILING 서비스의 웹사이트 스크린샷",
          //     "type": "image",
          //     "value": require("./assets/images/tiling_4.png")
          // }
      ],

      footerLink: [
        {
          name: "github",
          url: "https://github.com/luckyPrice/Til_project/blob/main/README.md"
        }
        //  you can add extra buttons here.
      ]
    },


    









    // {
    //   title: "On The Top(OTT)", // 👈 projectDesc에서 제목 부분만 추출
    //   subtitle: "본 서비스는 사용자의 데스크 환경을 분석하고, 어울리는 제품을 추천 및 구매할 수 있는 AI 기반 데스크테리어 플랫폼입니다.",
    //   url: "on-the-top", 
    //   image: require("./assets/images/til.png"),
      
    //   content: [
    //     {
    //       type: 'image', // 타입: 이미지
    //       value: require("./assets/images/onthetop.png")
    //     },
    //     {
    //       type: 'subtitle', // 타입: 소제목
    //       value: 'AI 기반 개인화 추천'
    //     },
    //     {
    //       type: 'image', // 타입: 이미지
    //       value: require("./assets/images/onthetop.png")
    //     },
    //     {
    //       type: 'text', // 타입: 본문
    //       value: "On The Top(OTT)은 사용자의 데스크 환경을 AI로 분석하여 가장 어울리는 데스크테리어 제품을 추천하고 구매까지 연결하는 서비스입니다. AWS의 다양한 서비스를 활용하여 인프라를 구축했습니다."
    //     },
    //     {
    //       type: 'text',
    //       value: "예를 들어, Amazon S3에 제품 이미지를 저장하고, Amazon Rekognition으로 이미지 내 객체를 분석하여 사용자 취향에 맞는 제품을 태그 기반으로 추천합니다. 사용자가 데스크 사진을 업로드하면, 이 분석 결과를 바탕으로 개인화된 추천 목록을 제공하여 높은 만족도를 이끌어냈습니다. 이 프로젝트를 통해 대용량 이미지 처리와 AI 서비스를 연동하는 아키텍처 설계 경험을 쌓을 수 있었습니다."
    //     }
    //     // 👇 여기에 또 다른 이미지를 추가하고 싶다면?
    //     // { type: 'image', value: require("./assets/images/another_image.png") },
    //     // { type: 'text', value: '추가 설명입니다.' },
    //   ],

    //   footerLink: [
    //     {
    //       name: "github",
    //       url: "https://github.com/100-hours-a-week/16-Hot6-wiki/wiki/Cloud-Wiki"
    //     },
    //     {
    //       name: "github",
    //       url: "https://github.com/100-hours-a-week/16-Hot6-wiki/wiki"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    
    // {
    //   image: require("./assets/images/til.png"),
    //   // projectName: "Saayahealth",
    //   projectDesc: "TILING - LLM 기반 작성한 TIL을 Markdown(md) 형식으로 변환하여 연동된 플랫폼(GitHub, Notion)에 자동 업로드할 수 있는 기능을 제공합니다.",

    //    url: "tiling-project", 
      
    //   // 👇 (2/2) 상세 페이지 긴 설명 추가
    //   longDescription:
    //     "TILING은 개발자들의 '오늘 배운 것(Today I Learned)' 작성 생산성을 극대화하기 위한 LLM 기반 자동화 툴입니다. 사용자가 간단한 메모나 키워드 중심으로 내용을 입력하면, LLM API(예: OpenAI GPT)를 호출하여 자연스러운 문장의 Markdown 형식으로 변환해 줍니다. 또한, GitHub API, Notion API와 연동하여 버튼 클릭 한 번으로 사용자가 지정한 레포지토리나 페이지에 TIL을 자동으로 업로드합니다. 이 과정에서 CI/CD 파이프라인을 구축하여 코드 변경 시 자동으로 테스트 및 배포가 이루어지도록 설계했으며, 보안을 위해 API 키와 같은 민감 정보는 AWS Secrets Manager를 통해 안전하게 관리했습니다.",

    //   footerLink: [
    //     {
    //       name: "github",
    //       url: "https://github.com/luckyPrice/Til_project/tree/main"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/mugu.png"),
    //   // projectName: "Nextu",
    //   projectDesc: "MUGU - 집에 필요 없는 물건을 쉽게 팔거나, 단기적인 알바를 구하기 위한 사용자들에게 맞춤 서비스를 제공합니다.",

    //   url: "mugu-market",
      
    //   // 👇 (2/2) 상세 페이지 긴 설명 추가
    //   longDescription: 
    //     "MUGU는 지역 기반의 중고 거래와 단기 구인/구직을 연결하는 하이퍼로컬 플랫폼입니다. 사용자의 위치를 기반으로 주변의 거래 가능한 물품이나 아르바이트 정보를 실시간으로 보여줍니다. Docker와 Kubernetes(EKS)를 사용하여 마이크로서비스 아키텍처(MSA)로 인프라를 구축하였으며, 트래픽 급증에 대비하여 Auto Scaling을 설정해 안정적인 서비스 운영이 가능하도록 했습니다. Prometheus와 Grafana를 이용해 각 서비스의 상태를 실시간으로 모니터링하고, 장애 발생 시 슬랙으로 알림을 받아 신속하게 대응할 수 있는 시스템을 마련했습니다.",
        
    //   footerLink: [
       
    //     {
    //       name: "github",
    //       url: "https://github.com/luckyPrice/MUGU"
    //     },
    //   ]
    // },
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
          url: "https://drive.google.com/file/d/1BmBvYwYR2MVR0oskxMYcSbJYOBDZubMO/view?usp=sharing"
        },
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
          name: "Certification",
          url: "https://drive.google.com/file/d/1tZopzHoVonwjcESIunKoB6DzbG0h-CnI/view?usp=sharing"
        }
      ]
    },

    {
      title: "sqld",
      subtitle: "데이터모델링에 기본 지식을 바탕으로 SQL 작성, 성능 최적화 등 데이터베이스 개체 설계 및 구현 등에 대한 전문지식 및 실무적 수행 능력 가지고 있습니다.",
      image: require("./assets/images/sqld.png"),
      imageAlt: "sqld Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/14sfDiOUb1kx3i0lhBPaUlWUVQdR4u_lx/view?usp=sharing"}
      ]
    },

    {
      title: "OPIc IH",
      subtitle: "개인에게 익숙하지 않거나 예측하지 못한 복잡한 상황을 만날 때, 대부분의 상황에서 사건을 설명하고 문제를 효과적으로 해결할 수 있는 영어어회화 등급. 발화량이 많고, 다양한 어휘를 사용할 수 있습니다.",
      image: require("./assets/images/opic.png"),
      imageAlt: "OPIc Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
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
    "An Sang Woon",
  number: "010-4153-2941",
  email_address: "asw116@naver.com",
  // github: "lyckyPrice"
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
