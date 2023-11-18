import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import DashboardContent from "./components/Dashboard/DashboardContent";
import CourseContent from "./components/Dashboard/CourseContent";
import TasksContent from "./components/Dashboard/TasksContent";
import SettingsContent from "./components/Dashboard/SettingsContent";
import CpatpContent from "./components/Dashboard/CpatpContent";
import LessonContent from "./components/Dashboard/LessonContent";
import LessonDetail from "./components/Lesson/LessonDetail";
import ListTask from "./components/Tasks/ListTask";
import DetailTask from "./components/Tasks/DetailTask";
import ListTaskSubmit from "./components/Tasks/ListTaskSubmit";
import QuizContent from "./components/Dashboard/QuizContent";
import QuizPernafasan from "./components/Dashboard/QuizPernafasanContent";
import QuizPenyakit from "./components/Dashboard/QuizPenyakitContent";
import AugmentedReality from "./components/Dashboard/AugmentedRealityContent";
import AugmentedRealityMenuContent from "./components/Dashboard/AugmentedRealityMenuContent";

function App() {
  return (
    <div>
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<DashboardContent />} />{" "}
          {/* Ini adalah rute utama */}
          <Route path="course" element={<CourseContent />}>
            <Route index element={<CpatpContent />} />
            <Route path="lesson" element={<LessonContent />}>
              <Route path=":lessonId" element={<LessonDetail />} />
            </Route>
          </Route>
          {/*Ini adalah rute untuk augmented reality*/}
          <Route path="ar" element={<AugmentedReality />}>
            <Route index element={<AugmentedRealityMenuContent />} />
          </Route>
          {/* Ini adalah rute untuk konten kursus */}
          <Route path="quiz" element={<QuizContent />} />
          <Route path="quiz-pernafasan" element={<QuizPernafasan />} />
          <Route path="quiz-penyakit" element={<QuizPenyakit />} />
          <Route path="tasks" element={<TasksContent />}>
            <Route index element={<ListTask />} />
            <Route path="list" element={<ListTaskSubmit />} />
            <Route path=":taskId" element={<DetailTask />} />
          </Route>
          {/* Ini adalah rute untuk konten tugas */}
          <Route path="settings" element={<SettingsContent />} />{" "}
          {/* Ini adalah rute untuk konten pengaturan */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
