import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Team from './pages/team/Team.jsx';
import Contacts from './pages/contacts/Contacts.jsx';
import Invoices from './pages/invoices/Invoices';
import Form from './pages/form/Form';
import Calendar from './pages/calendar.jsx/Calendar';
import Faq from './pages/faq/Faq';
import Geography from './pages/geography/Geography';
import LineChart from './pages/lineChart/LineChart';

import PieChart from './pages/pieChart/PieChart';
import BarChart from './pages/barChart/BarChart.jsx';
import NotFound from './pages/notFound/NotFound.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='calendar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='bar' element={<BarChart />} />
      <Route path='geography' element={<Geography />} />
      <Route path='line' element={<LineChart />} />
      <Route path='pie' element={<PieChart />} />






      <Route path='*' element={<NotFound />} />

    </Route>
  )
);

// ربط الراوتر بـ React
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
