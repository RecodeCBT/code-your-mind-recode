import { CheckCircle, X, ArrowUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ServicesComparisonTableProps {
  onServiceClick?: (serviceId: string) => void;
}

const ServicesComparisonTable = ({ onServiceClick }: ServicesComparisonTableProps) => {
  const services = [
    {
      id: "first-session",
      name: "Single RECODE Session",
      shortName: "Single Session",
      duration: "65 min",
      dropInSessions: "—",
      reportType: "Brief summary",
      psychometricTesting: true,
      homeExercises: true,
      chatCBTAccess: false,
      professionalLetter: false,
      price: "£149",
      pricePerSession: "£149",
      totalSavings: "£20",
      idealFor: "Exploring CBT for the first time",
      flagship: false
    },
    {
      id: "4-session",
      name: "4-Session Rewiring Programme",
      shortName: "4 Sessions",
      duration: "4 × 65 min",
      dropInSessions: "1 × 20 min",
      reportType: "Comprehensive",
      psychometricTesting: true,
      homeExercises: true,
      chatCBTAccess: false,
      professionalLetter: false,
      price: "£560",
      pricePerSession: "£140",
      totalSavings: "£116",
      idealFor: "Focused short-term goals and skill-building",
      flagship: false
    },
    {
      id: "6-session",
      name: "6-Session Rewiring Programme",
      shortName: "6 Sessions",
      duration: "6 × 65 min",
      dropInSessions: "2 × 20 min",
      reportType: "Comprehensive",
      psychometricTesting: true,
      homeExercises: true,
      chatCBTAccess: false,
      professionalLetter: false,
      price: "£780",
      pricePerSession: "£130",
      totalSavings: "£234",
      idealFor: "Comprehensive transformation and lasting change",
      flagship: false
    },
    {
      id: "blueprint-report",
      name: "RECODE Blueprint Report",
      shortName: "Blueprint",
      duration: "65 min + report",
      dropInSessions: "—",
      reportType: "Detailed written map",
      psychometricTesting: true,
      homeExercises: true,
      chatCBTAccess: false,
      professionalLetter: true,
      price: "£249",
      idealFor: "Detailed analysis for GP/workplace sharing",
      flagship: false
    },
    {
      id: "guided-practice",
      name: "Guided RECODE Practice",
      shortName: "Monthly",
      duration: "20 min/month",
      dropInSessions: "Monthly",
      reportType: "—",
      psychometricTesting: false,
      homeExercises: true,
      chatCBTAccess: true,
      professionalLetter: false,
      price: "£19/mo",
      idealFor: "Ongoing support and accountability",
      flagship: false
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onServiceClick) {
      onServiceClick(serviceId);
    }
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-primary/20 bg-slate-900/50 backdrop-blur-sm">
      <Table className="min-w-[700px] md:min-w-[900px]">
        <TableHeader>
          <TableRow className="border-b border-primary/20 hover:bg-transparent">
            <TableHead className="sticky left-0 z-20 bg-slate-900/90 backdrop-blur-sm text-slate-300 font-bold text-base border-r border-primary/20 min-w-[140px] sm:min-w-[180px]">
              Feature
            </TableHead>
            {services.map((service) => (
              <TableHead 
                key={service.id}
                className="text-center bg-slate-800/50 text-white font-bold text-xs sm:text-sm px-2 sm:px-4 min-w-[100px] sm:min-w-[140px] cursor-pointer hover:bg-slate-700/50 transition-colors relative group"
                onClick={() => handleServiceClick(service.id)}
              >
                <span className="group-hover:text-primary transition-colors">
                  {service.shortName}
                </span>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Duration */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              Duration
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent text-slate-700 px-1 sm:px-2 text-xs sm:text-sm">
                {service.duration}
              </TableCell>
            ))}
          </TableRow>

          {/* Drop-in Sessions */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              20-min Drop-In Sessions
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent text-slate-700 px-1 sm:px-2 text-xs sm:text-sm">
                {service.dropInSessions === "—" ? (
                  <span className="text-muted-foreground">—</span>
                ) : (
                  service.dropInSessions
                )}
              </TableCell>
            ))}
          </TableRow>

          {/* Report Type */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              Report Type
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent text-slate-700 px-1 sm:px-2 text-xs sm:text-sm">
                {service.reportType === "—" ? (
                  <span className="text-muted-foreground">—</span>
                ) : (
                  service.reportType
                )}
              </TableCell>
            ))}
          </TableRow>

          {/* Psychometric Testing */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              Psychometric Testing
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent px-1 sm:px-2">
                {service.psychometricTesting ? (
                  <CheckCircle className="w-5 h-5 text-teal-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                )}
              </TableCell>
            ))}
          </TableRow>

          {/* Home Exercises */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              Home Exercises
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent px-1 sm:px-2">
                {service.homeExercises ? (
                  <CheckCircle className="w-5 h-5 text-teal-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                )}
              </TableCell>
            ))}
          </TableRow>

          {/* 24/7 ChatCBT Access */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              24/7 ChatCBT Access
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent px-1 sm:px-2">
                {service.chatCBTAccess ? (
                  <CheckCircle className="w-5 h-5 text-teal-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                )}
              </TableCell>
            ))}
          </TableRow>

          {/* Professional Letter */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              Professional Letter
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent px-1 sm:px-2">
                {service.professionalLetter ? (
                  <CheckCircle className="w-5 h-5 text-teal-400 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                )}
              </TableCell>
            ))}
          </TableRow>

          {/* Price - Per Session */}
          <TableRow className="border-b border-primary/10 hover:bg-slate-100/10 bg-slate-800/20">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-bold text-slate-100 border-r border-primary/10">
              Price (Per Session)
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent px-1 sm:px-2">
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-lg font-bold text-slate-100">
                    {service.pricePerSession || service.price}
                  </span>
                  {service.totalSavings && (
                    <span className="text-xs text-green-400 font-semibold">
                      (save {service.totalSavings})
                    </span>
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>

          {/* Ideal For */}
          <TableRow className="hover:bg-slate-100/10">
            <TableCell className="sticky left-0 z-10 bg-slate-900/90 backdrop-blur-sm font-semibold text-slate-200 border-r border-primary/10">
              Ideal For
            </TableCell>
            {services.map((service) => (
              <TableCell key={service.id} className="text-center bg-transparent text-slate-700 px-1 sm:px-2 text-xs sm:text-sm">
                {service.idealFor}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ServicesComparisonTable;
