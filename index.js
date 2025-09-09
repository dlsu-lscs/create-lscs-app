#!/usr/bin/env node
import readline from 'readline'
import { execSync } from 'child_process'

// ────────────────────────────────
// Utility: ask question
// ────────────────────────────────
function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

async function main() {
  // Step 0: Get project name
  let projectName = process.argv[2]
  if (!projectName) {
    projectName = await askQuestion('📦 Enter your project name: ')
    if (!projectName) {
      console.error('❌ Project name is required.')
      process.exit(1)
    }
  }

  // Step 1: Ask project type
  const answer = await askQuestion(
    'Select project type:\n[1] Server (coming soon)\n[2] Web (coming soon)\n[3] Next\nYour choice: '
  )

  switch (answer.trim()) {
    case '1':
    case '2':
      console.error(
        '❌ This option is currently unavailable. Please choose Next (3).'
      )
      process.exit(1)
    case '3':
      execSync(`npx create-lscs-next-app ${projectName}`, {
        stdio: 'inherit',
      })
      break
    default:
      console.error('❌ Invalid option.')
      process.exit(1)
  }
}

main().catch((err) => {
  console.error('❌ Unexpected error:', err)
  process.exit(1)
})
