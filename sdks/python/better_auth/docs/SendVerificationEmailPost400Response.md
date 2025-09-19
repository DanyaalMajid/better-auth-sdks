# SendVerificationEmailPost400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Error message | [optional] 

## Example

```python
from better_auth.models.send_verification_email_post400_response import SendVerificationEmailPost400Response

# TODO update the JSON string below
json = "{}"
# create an instance of SendVerificationEmailPost400Response from a JSON string
send_verification_email_post400_response_instance = SendVerificationEmailPost400Response.from_json(json)
# print the JSON string representation of the object
print(SendVerificationEmailPost400Response.to_json())

# convert the object into a dict
send_verification_email_post400_response_dict = send_verification_email_post400_response_instance.to_dict()
# create an instance of SendVerificationEmailPost400Response from a dict
send_verification_email_post400_response_from_dict = SendVerificationEmailPost400Response.from_dict(send_verification_email_post400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


