"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface ApearianceBlockProps {
    children: ReactNode;
    pos: [{ [key: string]: number }, { [key: string]: number }]
}

export default function ApearianceBlock({ children, pos }: ApearianceBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, ...pos[0] }}
            whileInView={{ opacity: 1, ...pos[1] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    )
}
