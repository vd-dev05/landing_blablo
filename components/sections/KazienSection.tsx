'use client';

import AppDownload from '@/components/common/AppDownload';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { LineChart, Line, XAxis, ReferenceDot, ResponsiveContainer } from 'recharts';

// Define types for our chart components
interface ViewBox {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

interface TickProps {
  x: number;
  y: number;
  payload: {
    value: number;
  };
}

export default function KazienSection() {    return (      
      <section className="bg-[#34C759] py-16 md:py-20 lg:py-24 px-4 overflow-visible" style={{ overflow: 'visible' }}>
          <div className="max-w-[1176px] mx-auto overflow-visible" style={{ overflow: 'visible' }}>            
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#ABEEBC] font-bricolage font-normal text-4xl sm:text-5xl md:text-6xl lg:text-[98px] leading-[100%] text-center mb-10 md:mb-20 md:-translate-y-2"
            >
              <span className='text-white'>Grow</span> the <span className='text-white'>Kaizen</span> way
            </motion.h1>            
            
            {/* Main container with increased height to accommodate the large tree */} 
                       <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 lg:p-12 relative mb-[80px]"
                style={{
                    borderRadius: "32px",
                    height: "468px", // Matching the Figma design height
                    overflow: "visible", 
                    position: "relative",
                    zIndex: 1
                }}
            >            
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 h-full relative overflow-visible">
                {/* Left side - Kaizen steps */}
                <div className="h-full relative z-10">
                  <h2 className="font-bricolage text-[14px] md:text-[16px] text-black mb-2 pb-2">
                    Our approach is inspired by Kaizen – a Japanese philosophy of steady, small steps that lead to big success.
                  </h2>
                    <div className="space-y-6 relative">                    
                    {/* Vertical line connecting dots - gradient background */}
                    <div className="absolute left-[9px] top-[24px] w-[2px] h-[calc(100%-48px)] bg-gradient-to-b from-[rgba(170,235,186,1)] via-[rgba(72,195,103,1)] to-[rgba(17,165,54,1)]"></div>
                    
                    {/* Step 1 */}
                    <div className="flex gap-4">
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-[#34C759] flex-shrink-0 z-10 relative"></div>
                      </div>
                      <div>
                        <p className="text-black font-medium">
                          <span className="font-bold">Pick a real scenario :</span> Ordering coffee, presenting a project, whatever you want!
                        </p>
                      </div>
                    </div>
                    
                    {/* Step 2 */}
                    <div className="flex gap-4">
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-[#34C759] flex-shrink-0 z-10 relative"></div>
                      </div>
                      <div>
                        <p className="text-black font-medium">
                            
                          Get bite-size lessons built just for it, and <span className="font-bold">master the scenario in a week</span>
                        </p>
                      </div>
                    </div>
                    
                    {/* Step 3 */}
                    <div className="flex gap-4">
                      <div className="relative">
                        <div className="h-5 w-5 rounded-full bg-[#34C759] flex-shrink-0 z-10 relative"></div>
                      </div>
                      <div>
                        <p className="text-black font-medium">
                          Add a new scenario every week. Soon you can <span className="font-bold">talk about anything you care about</span> with ease!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>                  {/* Right side - Tree Growth Visualization */}                <div className="relative w-full h-full overflow-visible flex items-end" style={{ zIndex: 20 }}>
                  {/* Timeline with trees */}
                  <div className="absolute bottom-0 left-0 right-0 h-[180px] overflow-visible">                    {/* Large tree overlay - Positioned absolutely to avoid clipping with exact 470x470 size */}
                    <div 
                      className="absolute right-[-200px] bottom-[-390px] z-50"
                      style={{
                        width: '470px',
                        height: '470px',
                        transform: 'translateY(-100%)',
                        pointerEvents: 'none',
                        overflow: 'visible'
                      }}
                    >
                      <Image
                        src="/images/kaizen/tree3.png"
                        alt="Large growth tree"
                        width={470}
                        height={470}
                        priority
                        className="object-contain absolute bottom-0"
                        style={{ 
                          objectPosition: 'bottom',
                          width: '470px',
                          height: '470px'
                        }}
                      />
                    </div>
                    
                    <ResponsiveContainer width="100%" height="100%" style={{ overflow: 'visible' }}>
                      <LineChart
                        data={[
                          { x: 0, y: 0 },
                          { x: 33, y: 0 },
                          { x: 67, y: 0 },
                          { x: 100, y: 0 }
                        ]}
                        margin={{ top: 40, right: 60, left: 20, bottom: 40 }}
                      >
                        {/* Baseline with arrow */}
                        <Line
                          type="linear"
                          dataKey="y"
                          stroke="#D1D5DB"
                          strokeWidth={1}
                          dot={false}
                        />
                        
                        {/* X-Axis with labels */}
                        <XAxis 
                          dataKey="x" 
                          axisLine={false}
                          tickLine={false}
                          height={50}                          tick={({ x, y, payload }: TickProps) => {
                            // Only render "Weeks" at the start and "Months" at the end
                            if (payload.value === 0) {
                              return (
                                <text x={x} y={y + 20} fill="#6B7280" fontSize={12} textAnchor="start">
                                  Weeks
                                </text>
                              );
                            } else if (payload.value === 100) {
                              return (
                                <text x={x} y={y + 20} fill="#6B7280" fontSize={12} textAnchor="end">
                                  Months
                                </text>
                              );
                            }
                            // Return an empty text element instead of null
                            return (
                              <text x={x} y={y} fill="transparent"></text>
                            );
                          }}
                        />
                        
                        {/* Tree 0 - Seedling */}
                        <ReferenceDot
                          x={0}
                          y={0}
                          r={0}
                          label={({ viewBox }: { viewBox: ViewBox }) => {
                            return (
                              <foreignObject
                                x={viewBox.x - 18}
                                y={viewBox.y - 36}
                                width={36}
                                height={36}
                              >
                                <div className="w-full h-full relative">
                                  <Image
                                    src="/images/kaizen/tree0.png"
                                    alt="Seedling"
                                    width={36}
                                    height={36}
                                    className="object-contain absolute bottom-0"
                                    style={{ objectPosition: 'bottom center' }}
                                  />
                                </div>
                              </foreignObject>
                            );
                          }}
                        />
                        
                        {/* Tree 1 - Small Tree */}
                        <ReferenceDot
                          x={33}
                          y={0}
                          r={0}
                          label={({ viewBox }: { viewBox: ViewBox }) => {
                            return (
                              <foreignObject
                                x={viewBox.x - 60}
                                y={viewBox.y - 75}
                                width={75}
                                height={75}
                              >
                                <div className="w-full h-full relative">
                                  <Image
                                    src="/images/kaizen/tree1.png"
                                    alt="Small tree"
                                    width={75}
                                    height={75}
                                    className="object-contain absolute bottom-0"
                                    style={{ objectPosition: 'bottom center' }}
                                  />
                                </div>
                              </foreignObject>
                            );
                          }}
                        />
                        
                        {/* Tree 2 - Medium Tree */}
                        <ReferenceDot
                          x={67}
                          y={0}
                          r={0}
                          label={({ viewBox }: { viewBox: ViewBox }) => {
                            return (
                              <foreignObject
                                x={viewBox.x - 70}
                                y={viewBox.y - 100}
                                width={100}
                                height={150}
                                style={{ zIndex: 40  }}
                              >
                                <div className="w-full h-full relative">
                                  <Image
                                    src="/images/kaizen/tree2.png"
                                    alt="Medium tree"
                                    width={100}
                                    height={150}
                                    className="object-contain absolute bottom-[50px]"
                                    style={{ objectPosition: 'bottom center' }}
                                  />
                                </div>
                              </foreignObject>
                            );
                          }}
                        />
                        
                        {/* Dot at start of timeline */}
                        <ReferenceDot x={0} y={0} r={3} fill="#D1D5DB" stroke="none" />
                        
                        {/* Arrow at end of timeline */}
                        <ReferenceDot
                          x={100}
                          y={0}
                          r={0}
                          label={({ viewBox }: { viewBox: ViewBox }) => (
                            <g>
                              <path
                                d={`M ${viewBox.x-6} ${viewBox.y-6} L ${viewBox.x} ${viewBox.y} L ${viewBox.x-6} ${viewBox.y+6}`}
                                stroke="#D1D5DB"
                                strokeWidth="1"
                                fill="none"
                              />
                            </g>
                          )}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                color: 'var(--Grays-White, var(--Grays-White, #FFF))',
                textAlign: 'center',
                fontFamily: '"Bricolage Grotesque"',
                fontSize: '36px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '150% /* 54px */',
              }}
            >
              Pick your first scenario for free!
            </motion.p>
            <AppDownload/>

          </div>
        </section>
    );
}
