# SendVerificationEmailPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the email was sent successfully | [optional] 

## Example

```python
from better_auth.models.send_verification_email_post200_response import SendVerificationEmailPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendVerificationEmailPost200Response from a JSON string
send_verification_email_post200_response_instance = SendVerificationEmailPost200Response.from_json(json)
# print the JSON string representation of the object
print(SendVerificationEmailPost200Response.to_json())

# convert the object into a dict
send_verification_email_post200_response_dict = send_verification_email_post200_response_instance.to_dict()
# create an instance of SendVerificationEmailPost200Response from a dict
send_verification_email_post200_response_from_dict = SendVerificationEmailPost200Response.from_dict(send_verification_email_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


