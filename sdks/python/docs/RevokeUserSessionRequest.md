# RevokeUserSessionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_token** | **str** | The session token | 

## Example

```python
from better_auth.models.revoke_user_session_request import RevokeUserSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RevokeUserSessionRequest from a JSON string
revoke_user_session_request_instance = RevokeUserSessionRequest.from_json(json)
# print the JSON string representation of the object
print(RevokeUserSessionRequest.to_json())

# convert the object into a dict
revoke_user_session_request_dict = revoke_user_session_request_instance.to_dict()
# create an instance of RevokeUserSessionRequest from a dict
revoke_user_session_request_from_dict = RevokeUserSessionRequest.from_dict(revoke_user_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


