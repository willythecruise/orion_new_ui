"use client"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
    },
  ]

  export function DrawerDemo() {
    // const [goal, setGoal] = React.useState(350)
   
    // function onClick(adjustment: number) {
    //   setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    // }
   
    return (
     
           
       
              <div className="mt-3 h-[400px] sm:h-[600px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={
                        {
                          fill: "hsl(var(--primary))",
                          opacity: 0.7,
                        }
                      }
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
          
           
        

   
    )
  }