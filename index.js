#!/usr/bin/env node
import readline from 'readline'
import { execSync } from 'child_process'

const projectName = process.argv[2]
if (!projectName) {
  console.error('❌ Please provide a project name: npx create-lscs-app my-app')
  process.exit(1)
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question(
  'Select project type:\n[1] Server (coming soon)\n[2] Web (coming soon)\n[3] Next\nYour choice: ',
  (answer) => {
    rl.close()
    switch (answer.trim()) {
      case '1':
      case '2':
        console.error(
          '❌ This option is currently unavailable. Please choose Next (3).'
        )
        break
      case '3':
        execSync(`npx create-lscs-next-app ${projectName}`, {
          stdio: 'inherit',
        })
        break
      default:
        console.error('❌ Invalid option.')
    }
  }
)
