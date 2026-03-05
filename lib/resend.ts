import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendConfirmationEmail({
  firstName,
  email,
  tier,
  specialty,
}: {
  firstName: string
  email: string
  tier?: string
  specialty?: string
}) {
  const tierLabel =
    tier === 'launch' ? 'Launch ($297/mo)' :
    tier === 'operate' ? 'Operate ($797/mo)' :
    tier === 'scale' ? 'Scale (Custom)' :
    'your selected plan'

  await resend.emails.send({
    from: 'ClinicClaw <hello@clinicclaw.com>',
    to: email,
    subject: `${firstName}, your ClinicClaw application is received`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; background: #080c18; color: #f8fafc;">
        <div style="margin-bottom: 32px;">
          <div style="display: inline-flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px; font-weight: 700; color: #f8fafc;">Clinic<span style="color: #14b8a6;">Claw</span></span>
          </div>
        </div>

        <h1 style="font-size: 24px; font-weight: 700; color: #f8fafc; margin-bottom: 16px; line-height: 1.3;">
          Your application is in, ${firstName}.
        </h1>

        <p style="font-size: 16px; color: #94a3b8; line-height: 1.6; margin-bottom: 24px;">
          Thank you for applying for <strong style="color: #f8fafc;">${tierLabel}</strong>${specialty ? ` for your ${specialty} practice` : ''}. Our team typically reviews applications within 24 hours.
        </p>

        <div style="background: #0d1424; border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
          <h2 style="font-size: 14px; font-weight: 600; color: #f8fafc; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.1em;">What happens next</h2>
          <ol style="font-size: 14px; color: #94a3b8; line-height: 1.8; padding-left: 20px; margin: 0;">
            <li>A ClinicClaw specialist will review your application</li>
            <li>You'll receive a call or email within 24 hours to schedule your onboarding kickoff</li>
            <li>We configure your AI agents to match your practice protocols</li>
            <li>You approve the setup and go live — typically within 48 hours of your kickoff call</li>
          </ol>
        </div>

        <p style="font-size: 14px; color: #475569; margin-bottom: 8px;">
          Questions? Reply to this email or reach us at <a href="mailto:hello@clinicclaw.com" style="color: #14b8a6;">hello@clinicclaw.com</a>
        </p>

        <p style="font-size: 12px; color: #475569; margin-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px;">
          ClinicClaw by Metaphase Marketing · HIPAA-Safe · BAA Included<br/>
          <a href="https://clinicclaw.com/privacy" style="color: #475569;">Privacy Policy</a> · <a href="https://clinicclaw.com/terms" style="color: #475569;">Terms</a>
        </p>
      </div>
    `,
  })
}
