import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendConfirmationEmail } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      first_name,
      last_name,
      email,
      phone,
      practice_name,
      specialty,
      locations,
      weekly_noshows,
      tier,
      timeline,
      how_heard,
      city_state,
      interested_automations,
    } = body

    // Validate required fields
    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      )
    }

    // Insert into Supabase
    const { error: dbError } = await supabase.from('applications').insert({
      first_name,
      last_name,
      email,
      phone: phone || null,
      practice_name: practice_name || null,
      specialty: specialty || null,
      locations: locations || null,
      weekly_noshows: weekly_noshows || null,
      tier: tier || null,
      timeline: timeline || null,
      how_heard: how_heard || null,
      city_state: city_state || null,
      interested_automations: interested_automations || [],
      status: 'new',
    })

    if (dbError) {
      console.error('Supabase error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save application' },
        { status: 500 }
      )
    }

    // Send confirmation email (non-blocking — don't fail if email fails)
    try {
      await sendConfirmationEmail({
        firstName: first_name,
        email,
        tier,
        specialty,
      })
    } catch (emailError) {
      console.error('Email error (non-fatal):', emailError)
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Apply route error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
