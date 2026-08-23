import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone, country, interest, partnershipType, investment, message, type } = body

    const targetEmail = 'kigolamendrad@gmail.com'

    // Forward to Web3Forms free email forwarding service if available or log/return success
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
        subject: `New KIC Website Inquiry: ${name} (${type === 'partner' ? 'Partnership' : 'General'})`,
        from_name: name,
        replyto: email,
        to_email: targetEmail,
        name,
        company,
        email,
        phone,
        country,
        interest,
        partnershipType,
        investment,
        message,
      }),
    })

    const data = await res.json().catch(() => ({}))

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      targetEmail,
      data,
    })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
