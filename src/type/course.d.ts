interface Attendance {
  attendance: (0 | 1 | 2 | 3)[];
  id: string;
}
interface CourseDeatilInfo {
  courseInfo: string;
  courseGoal: string;
  maxMemberNum: number;
  courseDate: string;
  courseNotice: string;
  coursePlace: string;
}
interface Course extends CourseDeatilInfo {
  courseAttendance: Attendance[];
  courseCheckAdmin: string[];
  courseCurriculum: string[];
  courseName: string;
  courseLeader: {
    id: string;
    name: string;
    emoji: string;
    comment: string;
  };
  id: string;
  courseMember: string[];
  courseStack: string[];
  language: Language[];
  // 1 : 세션, 2 : 스터디, 3: 프로젝트
  courseType: 1 | 2 | 3;
  difficulty: string;
  requireTime: string;
  semester: string;
  otherLeaders: OtherLeader[];
}
