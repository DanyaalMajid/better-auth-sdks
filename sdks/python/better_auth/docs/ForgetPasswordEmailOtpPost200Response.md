# ForgetPasswordEmailOtpPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | Indicates if the OTP was sent successfully | [optional] 

## Example

```python
from better_auth.models.forget_password_email_otp_post200_response import ForgetPasswordEmailOtpPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ForgetPasswordEmailOtpPost200Response from a JSON string
forget_password_email_otp_post200_response_instance = ForgetPasswordEmailOtpPost200Response.from_json(json)
# print the JSON string representation of the object
print(ForgetPasswordEmailOtpPost200Response.to_json())

# convert the object into a dict
forget_password_email_otp_post200_response_dict = forget_password_email_otp_post200_response_instance.to_dict()
# create an instance of ForgetPasswordEmailOtpPost200Response from a dict
forget_password_email_otp_post200_response_from_dict = ForgetPasswordEmailOtpPost200Response.from_dict(forget_password_email_otp_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


