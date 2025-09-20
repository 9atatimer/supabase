import { test, expect } from '@playwright/test'
import { exec } from 'child_process'

test.describe('CLI tests', () => {
  test('supabase functions list --output json returns valid json', async () => {
    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec('npx supabase functions list --output json', (error, stdout, stderr) => {
        if (error) {
          reject(error)
        }
        resolve({ stdout, stderr })
      })
    })

    expect(stderr).toBe('')
    let jsonOutput
    try {
      jsonOutput = JSON.parse(stdout)
    } catch (e) {
      // ignore
    }
    expect(jsonOutput).toBeDefined()
  })

  test('supabase secrets list --output json returns valid json', async () => {
    const { stdout, stderr } = await new Promise((resolve, reject) => {
      exec('npx supabase secrets list --output json', (error, stdout, stderr) => {
        if (error) {
          reject(error)
        }
        resolve({ stdout, stderr })
      })
    })

    expect(stderr).toBe('')
    let jsonOutput
    try {
      jsonOutput = JSON.parse(stdout)
    } catch (e) {
      // ignore
    }
    expect(jsonOutput).toBeDefined()
  })
})
